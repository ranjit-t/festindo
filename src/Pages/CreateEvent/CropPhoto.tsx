import React, { useState, useRef } from "react";
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
  convertToPixelCrop,
} from "react-image-crop";
import { canvasPreview } from "./canvasPreview";
import { useDebounceEffect } from "./useDebounceEffect";
import "react-image-crop/dist/ReactCrop.css";

function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

export default function CropPhoto({ setCroppedPhoto }) {
  const [imgSrc, setImgSrc] = useState("");
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const hiddenAnchorRef = useRef<HTMLAnchorElement>(null);
  const blobUrlRef = useRef("");
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [aspect, setAspect] = useState<number | undefined>(16 / 10);

  const [cropDone, setCropDone] = useState(false);

  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    setCroppedPhoto(null);
    setCropDone(false);
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined);
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setImgSrc(reader.result?.toString() || "")
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate
        );
      }
    },
    100,
    [completedCrop, scale, rotate]
  );

  const handleDone = () => {
    if (completedCrop?.width && completedCrop?.height && imgRef.current) {
      canvasPreview(
        imgRef.current,
        previewCanvasRef.current,
        completedCrop,
        scale,
        rotate
      );

      const canvas = previewCanvasRef.current;
      if (canvas) {
        canvas.toBlob((blob) => {
          if (blob) {
            // Convert blob to File
            const croppedFile = new File([blob], "cropped-image.jpeg");
            setCroppedPhoto(croppedFile);
          }
        }, "image/jpeg");
        setCropDone(true);
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center Crop-Controls">
        <label>
          Event Photo :
          <input
            type="file"
            accept="image/*"
            onChange={onSelectFile}
            className="border border-1 border-gray-400  px-4 py-2 outline-none rounded-lg block w-[90vw] max-w-[500px]"
          />
        </label>
      </div>
      {imgSrc && !cropDone && (
        <div className="bg-white p-8 flex flex-col gap-4 justify-center items-center shadow-md  border">
          <div className="flex justify-center mx-auto w-[90vw] max-w-[600px]">
            <ReactCrop
              crop={crop}
              onChange={(_, percentCrop) => setCrop(percentCrop)}
              onComplete={(c) => setCompletedCrop(c)}
              aspect={aspect}
            >
              <img
                ref={imgRef}
                alt="Crop me"
                src={imgSrc}
                style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
                onLoad={onImageLoad}
              />
            </ReactCrop>
          </div>

          {imgSrc && !cropDone && (
            <button
              type="submit"
              className="bg-green-600 rounded-lg  hover:shadow-lg text-white p-2 max-w-[150px]"
              onClick={handleDone}
            >
              Done Cropping
            </button>
          )}
        </div>
      )}
      {completedCrop && (
        <>
          <div className="hidden">
            <canvas
              ref={previewCanvasRef}
              style={{
                border: "1px solid black",
                objectFit: "contain",
                width: completedCrop.width,
                height: completedCrop.height,
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}
