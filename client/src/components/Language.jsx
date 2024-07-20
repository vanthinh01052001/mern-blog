import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Vi from "../assets/flags/vi.png";
import Uk from "../assets/flags/uk.png";
import { useTranslation } from "react-i18next";

const countries = [
  {
    label: "vi",
    src: Vi,
    link: " ",
    value: "vi",
  },
  {
    label: "uk",
    src: Uk,
    link: " ",
    value: "uk",
  },
];
const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(6),
    minWidth: 60,
    backgroundColor: "transparent",
  },
  select: {
    textAlign: "center",
    textDecoration: "none",
  },
}));
const Language = () => {
  const { i18n } = useTranslation();
  const classes = useStyles();
  const [country, setCountry] = React.useState("vi");
  const [open, setOpen] = React.useState(false);
  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  useEffect(() => {
    i18n.changeLanguage(country);
  }, [country]);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <form autoComplete="off">
      <FormControl className={classes.formControl}>
        {/* <InputLabel htmlFor="open-select" /> */}
        <Select
          IconComponent="undefined"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={country}
          name="country"
          onChange={handleChange}
          //   inputProps={{
          //     id: "open-select",
          //   }}
        >
          {countries.map((option, key) => (
            <MenuItem value={option.value} key={key}>
              <img src={option.src} alt={option.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
};

export default Language;
