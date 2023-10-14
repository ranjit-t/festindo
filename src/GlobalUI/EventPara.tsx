export default function EventPara({
  head,
  content,
  css,
  onClick,
}: {
  head: string;
  content?: any;
  css?: string;
  onClick?: () => void;
}) {
  return (
    <div>
      <p>
        <strong className="font-bold text-lg">{head} : </strong>
        <span className={css} onClick={onClick}>
          {content}
        </span>
      </p>
    </div>
  );
}
