import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import eventStore from "../Store/eventStore";

export default function SelectLabels({
  setVisible,
}: {
  setVisible?: CustomDispatch<boolean>;
}) {
  const { country, changeCountry } = eventStore();

  const handleChange = (event: SelectChangeEvent) => {
    changeCountry(event.target.value);
    if (setVisible) {
      setVisible(false);
    }
  };

  return (
    <div className=" text-xl ">
      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <Select
          value={country}
          onChange={handleChange}
          displayEmpty
          className="country-text custom-filter custom-filter-data"
          variant="standard" // Set the variant to "standard" to remove the outline
          sx={{
            fontFamily: "Exo, sans-serif",
            fontSize: "20px",
          }}
        >
          <MenuItem value={""} disabled>
            Country
          </MenuItem>
          <MenuItem value={"France"}>France</MenuItem>
          <MenuItem value={"UK"}>UK</MenuItem>
          <MenuItem value={"USA"}>USA</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
