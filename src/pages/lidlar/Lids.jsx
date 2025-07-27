import React, { useState } from "react";
import "./Lids.css";
import { CgArrowsExpandRight } from "react-icons/cg";
import { HiXMark } from "react-icons/hi2";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

function Lids({ sidebar }) {
  const [zoomPlus, setZoomPlus] = useState(false);
  const [shorten, setShorten] = useState(false);
  const [shorten2, setShorten2] = useState(false);
  const [shorten3, setShorten3] = useState(false);

  const [addToLids, setAddToLids] = useState(false);

  const [nextPage, setNextPage] = useState(false);

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
 const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
  disablePortal: true, // Qo‘shildi
};
  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

  function getStyles(name, personName, theme) {
    return {
      fontWeight: personName.includes(name)
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
    };
  }

  return (
    <>
      <div className={`lids-modals ${addToLids ? "placement" : ""}`}>
        <div className="lids-modals-information">
          <div className="lids-modals-information-down">
            <p>
              <span
                onClick={() => {
                  setAddToLids(false);
                }}
                className="lids-modals-mark"
              >
                <FaXmark />
              </span>
              <span>Lid qo'shish</span>
            </p>
            <div className="lids-modals-btns">
              <button
                className={`btn-nexts ${nextPage ? "delete-btn" : ""}`}
                onClick={() => {
                  setNextPage(true);
                }}
              >
                {" "}
                <FaChevronLeft /> Orqaga{" "}
              </button>
              <button>Bekor qilish</button>
              <button
                className="btn-prev"
                onClick={() => {
                  setNextPage(false);
                }}
              >
                Keyingi <FaChevronRight />
              </button>
            </div>
          </div>
          <div className="lids-modals-helper">
            <p
              className={`helps ${nextPage ? "activate" : ""}`}
              onClick={() => {
                setNextPage(true);
              }}
            >
              Asosiy
            </p>
            <p
              className={`helps ${nextPage ? "" : "activate2"}`}
              onClick={() => {
                setNextPage(false);
              }}
            >
              Yordamchi
            </p>
          </div>
          <div className="lids-modals-panels">
            <div
              className={`lids-modals-panels-content1 ${
                nextPage ? "" : "take-up"
              }`}
            >
              <ul>
                <li>
                  <label htmlFor="">Filial</label>
                  <button>Emirat</button>
                  <button>Xonaqoh</button>
                </li>
                <li>
                  <label htmlFor="">Murojaatchi</label>
                  <input type="text" placeholder="Izlash" />
                </li>
                <li>
                  <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-chip-label">
                      Ismlar
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-chip-label"
                      id="demo-multiple-chip"
                      multiple
                      value={personName}
                      onChange={handleChange}
                      input={
                        <OutlinedInput
                          id="select-multiple-chip"
                          label="Ismlar"
                        />
                      }
                      renderValue={(selected) => (
                        <Box
                          sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                        >
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      )}
                      MenuProps={MenuProps}
                    >
                      {names.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, personName, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </li>
                <li>salom</li>
              </ul>
            </div>
            <div
              className={`lids-modals-panels-content2 ${
                nextPage ? "take-down" : ""
              }`}
            >
              lorem400
            </div>
          </div>
        </div>
      </div>

      <div className="lids">
        <div className={`container ${sidebar ? "active" : ""}`}>
          <div className="variable">
            <div className={`lids-add-content ${zoomPlus ? "zooms" : ""}`}>
              <div className="lids-title">
                <h4>Lids</h4>
                <div className="expand">
                  <button
                    onClick={() => {
                      setAddToLids(true);
                    }}
                  >
                    Qo'shish
                  </button>
                  <p
                    onClick={() => {
                      setZoomPlus((prev) => !prev);
                    }}
                    className="zoom"
                  >
                    {zoomPlus ? <HiXMark /> : <CgArrowsExpandRight />}
                  </p>
                </div>
              </div>
              <h3 className="status">Status</h3>

              <ul className="status-bar">
                <li
                  onClick={() => {
                    {
                      setShorten((prev) => !prev);
                    }
                  }}
                >
                  Barchasi
                  {shorten ? <FaChevronDown /> : <FaChevronRight />}
                </li>
                <ul className={`shortcut ${shorten ? "cutting" : ""}`}>
                  <li>
                    <p>
                      Qayta bog'lanishga <span>20</span>
                    </p>{" "}
                    <FaChevronRight />
                  </li>
                  <li>
                    <p>
                      Sinov darsga yozildi <span>20</span>
                    </p>{" "}
                    <FaChevronRight />
                  </li>
                  <li>
                    <p>
                      {" "}
                      Sinov darsga qatnashdi <span>100</span>{" "}
                    </p>{" "}
                    <FaChevronRight />
                  </li>
                  <li>
                    <p>
                      O'qishni boshladi <span>0</span>{" "}
                    </p>{" "}
                    <FaChevronRight />
                  </li>
                  <li>
                    <p>
                      Ma'qul kelmadi <span>0</span>{" "}
                    </p>{" "}
                    <FaChevronRight />
                  </li>
                  <li>
                    <p>
                      Ma'qul kelmadi(Sifatsiz) <span>0</span>{" "}
                    </p>{" "}
                    <FaChevronRight />
                  </li>
                  <li>
                    <p>
                      Keyinroq o'qiydi <span>0</span>{" "}
                    </p>{" "}
                    <FaChevronRight />
                  </li>
                </ul>
              </ul>
            </div>
            <div className="lids-statistiks">
              <div className="lids-statistik">
                <div className="lids-title">
                  <h4>Lidlar(Statistika)</h4>
                  <div className="expand">
                    <p className="zoom">
                      {/* {zoomPlus ? <HiXMark /> : <CgArrowsExpandRight />} */}
                      <CgArrowsExpandRight />
                    </p>
                  </div>
                </div>
                <h3 className="status">Yil</h3>
                <ul className="status-bar">
                  <li
                    onClick={() => {
                      {
                        setShorten2((prev) => !prev);
                      }
                    }}
                  >
                    Barchasi
                    {shorten2 ? <FaChevronDown /> : <FaChevronRight />}
                  </li>
                  <ul className={`shortcut ${shorten2 ? "cutting" : ""}`}>
                    <li>
                      <p>
                        2025 <span>20</span>
                      </p>{" "}
                      <FaChevronRight />
                    </li>
                    <li>
                      <p>
                        2024 <span>20</span>
                      </p>
                      <FaChevronRight />
                    </li>
                    <li>
                      <p>
                        2024 <span>20</span>
                      </p>
                      <FaChevronRight />
                    </li>
                    <li>
                      <p>
                        2024 <span>20</span>
                      </p>
                      <FaChevronRight />
                    </li>
                  </ul>
                </ul>
              </div>
              <div className="lids-payings">
                <div className="lids-title">
                  <h4>Lidlar(To'lov Qilganlar)</h4>
                  <div className="expand">
                    <p className="zoom">
                      {/* {zoomPlus ? <HiXMark /> : <CgArrowsExpandRight />} */}
                      <CgArrowsExpandRight />
                    </p>
                  </div>
                </div>
                <h3 className="status">Yil</h3>
                <ul className="status-bar">
                  <li
                    onClick={() => {
                      {
                        setShorten3((prev) => !prev);
                      }
                    }}
                  >
                    Barchasi
                    {shorten3 ? <FaChevronDown /> : <FaChevronRight />}
                  </li>
                  <ul className={`shortcut ${shorten3 ? "cutting" : ""}`}>
                    <li>
                      <p>
                        2025 <span>20</span>
                      </p>{" "}
                      <FaChevronRight />
                    </li>
                    <li>
                      <p>
                        2024 <span>20</span>
                      </p>
                      <FaChevronRight />
                    </li>
                    <li>
                      <p>
                        2024 <span>20</span>
                      </p>
                      <FaChevronRight />
                    </li>
                    <li>
                      <p>
                        2024 <span>20</span>
                      </p>
                      <FaChevronRight />
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lids;
