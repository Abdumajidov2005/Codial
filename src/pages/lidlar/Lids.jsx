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

  // Select dropdown uchun to'g'irlangan MenuProps
  const MenuProps = {
    PaperProps: {
      sx: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        left: "0px !important",
        right: "auto !important",
      },
    },
    // Portal ishlatmaslik - dropdown modal ichida qoladi
    disablePortal: true,
    // Dropdown joylashuvini aniq belgilash - chap tomonda ochilishi uchun
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    // Dropdown pozitsiyasini to'g'irlash
    getContentAnchorEl: null,
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

  // +++++++++++++++++++++++++++++++

  const [names1, setNames1] = useState([
    "Akbarali Akbarov",
    "Alisher Alisherov",
    "Abdulla Abdullayev",
  ]);

  const [selected, setSelected] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [newName, setNewName] = useState("");
  const [newName2, setNewName2] = useState("");

  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (value === "custom") {
      setShowInput(true);
    } else {
      setSelected(value);
      setShowInput(false);
    }
  };

  const handleAddNew = () => {
    if (newName.trim() !== "" && newName2.trim() !== "") {
      setNames1([...names1, newName + " " + newName2]);
      setSelected(newName + " " + newName2);
      setNewName("");
      setNewName2("");
      setShowInput(false);
    }
  };

  // ================================

  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const agechange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  // =========================

  const [jobs, setJobs] = React.useState("");
  const [open2, setOpen2] = React.useState(false);

  const jobchange = (event) => {
    setJobs(event.target.value);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };
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
                <li className="filial-btns">
                  <p>Filial</p>
                  <div className="emirat-btn">
                    <button>Emirat</button>
                    <button>Xonaqoh</button>
                  </div>
                </li>
                <li className="applicant">
                  <div className="forma">
                    <label>Murojaatchi:</label>
                    <select value={selected} onChange={handleSelectChange}>
                      <option value="">Tanlang</option>
                      <option value="custom">➕ Yangi ism qo‘shish</option>
                      {names1.map((name, index) => (
                        <option key={index} value={name}>
                          {name}
                        </option>
                      ))}
                    </select>
                  </div>
                </li>
                <li className="age-master">
                  <p>Yosh guruhi</p>
                  <FormControl className="age-masters">
                    <InputLabel id="demo-controlled-open-select-label">
                      Age
                    </InputLabel>
                    <Select
                      className="younght"
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      value={age}
                      open={open}
                      onClose={handleClose}
                      onOpen={handleOpen}
                      label="Age"
                      onChange={agechange}
                      MenuProps={{
                        sx: {
                          zIndex: 9999,
                        },
                      }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>9-12</MenuItem>
                      <MenuItem value={20}>13-15</MenuItem>
                      <MenuItem value={40}>16-18</MenuItem>
                      <MenuItem value={50}>19-21</MenuItem>
                      <MenuItem value={60}>22-24</MenuItem>
                      <MenuItem value={70}>25-27</MenuItem>
                      <MenuItem value={80}>27-30</MenuItem>
                    </Select>
                  </FormControl>
                </li>
                <li className="age-master job">
                  <p>Ijtimoiy holati</p>
                  <FormControl className="age-masters">
                    <InputLabel
                      className="controlleer"
                      id="demo-controlled-open-select-label"
                    >
                      Holati
                    </InputLabel>
                    <Select
                      className="younght"
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      value={jobs}
                      open={open2}
                      onClose={handleClose2}
                      onOpen={handleOpen2}
                      label="Age"
                      onChange={jobchange}
                      MenuProps={{
                        sx: {
                          zIndex: 9999,
                        },
                      }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Maktab o'quvchisi</MenuItem>
                      <MenuItem value={20}>Oliygoh talabasi</MenuItem>
                      <MenuItem value={40}>Kompaniya xodimi</MenuItem>
                      <MenuItem value={50}>Davlat xizmatchisi</MenuItem>
                      <MenuItem value={60}>Vaqtincha ishsiz</MenuItem>
                    </Select>
                  </FormControl>
                </li>
                <li className="things">
                  <p>Noutbuki bormi</p>
                  <div className="things-btns">
                    <button>Bor</button>
                    <button>Yo'q</button>
                    <button>Sotib oladi</button>
                  </div>
                </li>
                <li className="test">
                  <label htmlFor="">salom</label>
                  <FormControl className="form-control">
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
                          className="test2"
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

      <div className={`student-about ${showInput ? "watch" : ""}`}>
        <div className="student-about-informations">
          <div className="lids-modals-information-down">
            <p>
              <span
                onClick={() => {
                  setShowInput(false);
                }}
                className="lids-modals-mark"
              >
                <FaXmark />
              </span>
              <span>Lid qo'shish</span>
            </p>
            <div className="lids-modals-btns">
              <button>Bekor qilish</button>
              <button onClick={handleAddNew}>Saqlash</button>
            </div>
          </div>
          <ul>
            <li className="filial-btns">
              <p>Filial</p>
              <div className="emirat-btn">
                <button>Emirat</button>
                <button>Xonaqoh</button>
              </div>
            </li>
            <li>
              <input
                type="text"
                placeholder="Yangi ism kiriting"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />

              {/* <button >Qo‘shish</button> */}
            </li>
            <li>
              <input
                type="text"
                placeholder="Yangi ism kiriting"
                value={newName2}
                onChange={(e) => setNewName2(e.target.value)}
              />
            </li>
          </ul>
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
