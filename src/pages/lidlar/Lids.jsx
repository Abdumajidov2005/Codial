import React, { useEffect, useRef, useState } from "react";
import "./Lids.css";
import { CgArrowsExpandRight } from "react-icons/cg";
import { HiXMark } from "react-icons/hi2";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Checkbox, Chip, ListItemText } from "@mui/material";
import LidsModal from "../../components/lidsmodal/LidsModal";

function Lids({ sidebar }) {
  const [zoomPlus, setZoomPlus] = useState(false);
  const [zoomPlus1, setZoomPlus1] = useState(false);
  const [zoomPlus2, setZoomPlus2] = useState(false);
  const [shorten, setShorten] = useState(false);
  const [shorten2, setShorten2] = useState(false);
  const [shorten3, setShorten3] = useState(false);

  const [addToLids, setAddToLids] = useState(false);

  const [nextPage, setNextPage] = useState(false);

  const [addTolidsUsers, setAddToLidsUsers] = useState(false);

  const ITEM_HEIGHT = 83;
  const ITEM_PADDING_TOP = 8;

  const MenuProps = {
    PaperProps: {
      sx: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 570,
        left: "120px !important",
        right: "auto !important",
        top: "140px !important",
      },
    },
    disablePortal: true,
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
  const [newName3, setNewName3] = useState("");

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
    if (
      newName.trim() !== "" &&
      newName2.trim() !== "" &&
      newName3.trim() !== ""
    ) {
      setNames1([...names1, newName + " " + newName2 + " " + newName3]);
      setSelected(newName + " " + newName2 + " " + newName3);
      setNewName("");
      setNewName2("");
      setNewName3("");
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

  const [cancelModal, setCancelModal] = useState(false);

  // =========================================================================================================

  const [opening, setOpening] = useState(false);
  const [selection, setSelection] = useState("Kursni tanlang...");
  const [search, setSearch] = useState("");
  const ref = useRef(null);
  const optionRef = useRef(null);

  const options = [
    "Apple",
    "Orange",
    "Banana",
    "Mango",
    "Peach",
    "Grapes",
    "aSDasd",
    "ddsfsdfsdf",
  ];

  // Qidiruv filter
  const filtered = options.filter((opt) =>
    opt.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        optionRef.current &&
        !optionRef.current.contains(e.target)
      ) {
        setOpening(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpening]);
  // ================================================================================
  const [open3, setOpen3] = useState(false);
  const [search3, setSearch3] = useState("");
  const [selected3, setSelected3] = useState([]);
  const ref3 = useRef(null);
  const optionRef3 = useRef(null);

  const options3 = [
    "08:00 - 10:00",
    "10:00 - 12:00",
    "14:00 - 16:00",
    "16:00 - 18:00",
    "18:00 - 20:00",
    "20:30 - 22:30",
  ];

  const filtered3 = options3.filter((opt) =>
    opt.toLowerCase().includes(search3.toLowerCase())
  );

  // tashqarini bosganda yopish
  useEffect(() => {
    function handleClickOutsides(eset) {
      if (
        ref3.current &&
        !ref3.current.contains(eset.target) &&
        optionRef3.current &&
        !optionRef3.current.contains(eset.target)
      ) {
        setOpen3(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutsides, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsides, true);
    };
  }, [setOpen3]);

  // Select all toggle
  const toggleAll = () => {
    if (selected3.length === options3.length) {
      setSelected3([]);
    } else {
      setSelected3([...options3]);
    }
  };

  const toggleOne = (opt) => {
    if (selected3.includes(opt)) {
      setSelected3(selected3.filter((s) => s !== opt));
    } else {
      setSelected3([...selected3, opt]);
    }
  };

  // ================================================================================

  const [openingStatus, setOpeningStatus] = useState(false);
  const [selectionStatus, setSelectionStatus] = useState("Statusni tanlang...");
  const [searchStatus, setSearchStatus] = useState("");
  const refStatus = useRef(null);
  const optionRefStatus = useRef(null);

  const optionsStatus = [
    "Apple",
    "Orange",
    "Banana",
    "Mango",
    "Peach",
    "Grapes",
    "aSDasd",
    "ddsfsdfsdf",
  ];

  // Qidiruv filter
  const filteredStatus = optionsStatus.filter((opt) =>
    opt.toLowerCase().includes(searchStatus.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutsideStatus(e) {
      if (
        refStatus.current &&
        !refStatus.current.contains(e.target) &&
        optionRefStatus.current &&
        !optionRefStatus.current.contains(e.target)
      ) {
        setOpeningStatus(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutsideStatus);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideStatus);
    };
  }, [setOpeningStatus]);

  //  ===============================================================================

  const [openingSourcing, setOpeningSourcing] = useState(false);
  const [selectionSourcing, setSelectionSourcing] =
    useState("Manbani tanlang...");
  const [searchSourcing, setSearchSourcing] = useState("");
  const refSourcing = useRef(null);
  const optionRefSourcing = useRef(null);

  const optionsSourcing = [
    "Apple",
    "Orange",
    "Banana",
    "Mango",
    "Peach",
    "Grapes",
    "aSDasd",
    "ddsfsdfsdf",
  ];

  // Qidiruv filter
  const filteredSourcing = optionsSourcing.filter((opt) =>
    opt.toLowerCase().includes(searchSourcing.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutsideSourcing(e) {
      if (
        refSourcing.current &&
        !refSourcing.current.contains(e.target) &&
        optionRefSourcing.current &&
        !optionRefSourcing.current.contains(e.target)
      ) {
        setOpeningSourcing(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutsideSourcing);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideSourcing);
    };
  }, [setOpeningSourcing]);

  // ====================================================================================

  const lidContent = [
    "T/R",
    "Murojaatchi",
    "Taglar",
    "Kurs",
    "Yosh guruhi",
    "Ijtimoiy holati",
    "Noutbuki bormi",
    "Manba",
    "Hafta kunlari",
    "Ma'qul dars vaqti",
    "Status",
    "Guruh",
    "Sinov dars kuni",
    "Sinov darsga qatnashdimi",
    "Qo'shilgan vaqt",
    "Qo'shgan shaxs",
    "Oxirgi o'zgarish vaqti",
    "Oxirgi o'zgartirdi",
    "Lid izohlari",
    "Shartnoma statusi",
    "Oy",
    "Yil",
    "Oyga to'lovlar",
  ];

  const lidListGroup = [
    {
      id: 0,
      tr: 1,
      murojaatchi: "Abdumajidov O'tkirbek",
      taglar: "Ijtimoiy tarmoq",
      kurs: "Frontend",
      yosh: "18-20",
      holati: "talaba",
      noutbuki: "bor",
      hafta: "duy,chor,jum",
      dars: "18-00, 21-00",
      manba: "telelgram",
      status: "qayta bog'lanishga",
      guruh: "frontend20",
      sinovD: "04/05/2025",
      darsgaQatnashdimi: "ha",
      qoshilganVaqt: "34/54/3243",
      qoshganShaxs: "codialinfo@gmail.com",
      ozgartirilganVaqt: "324/423/4234",
      oxiriOzgartirdi: "Codial admin",
      lidIzoh: "Lidizoh",
      shartnoma: "tuzilmagan",
      oy: "iyul",
      yil: "2025",
      oygaTolov: "oyga tolovlar",
    },
  ];

  const[exitTop, setExitTop] = useState(false)

  return (
    <>
      <div className={`lids-modals ${addToLids ? "placement" : ""}`}>
        <div className="lids-modals-information">
          <div className="lids-modals-information-down">
            <div className="lids-qoshish">
              <button
                onClick={() => {
                  setAddToLids(false);
                }}
                className="lids-modals-mark"
              >
                <FaXmark />
              </button>
              <p>Lid qo'shish</p>
            </div>
            <div className="lids-modals-btns">
              <button
                className={`btn-nexts ${nextPage ? "delete-btn" : ""}`}
                onClick={() => {
                  setNextPage(true);
                }}
              >
                <FaChevronLeft /> Orqaga
              </button>
              <button
                onClick={() => {
                  setCancelModal(true);
                }}
              >
                Bekor qilish
              </button>

              <div className={`lids-plus ${cancelModal ? "finished" : ""}`}>
                <LidsModal
                  setCancelModal={setCancelModal}
                  setAddToLids={setAddToLids}
                />
              </div>
              {nextPage ? (
                <button
                  className="btn-prev"
                  onClick={() => {
                    setNextPage(false);
                  }}
                >
                  Keyingi <FaChevronRight />
                </button>
              ) : (
                <button>Saqlash</button>
              )}
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
              <ul className="content1-registr">
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
                      <MenuItem sx={{ color: "gray" }} value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem sx={{ color: "#1e537d" }} value={10}>
                        9-12
                      </MenuItem>
                      <MenuItem sx={{ color: "#1e537d" }} value={20}>
                        13-15
                      </MenuItem>
                      <MenuItem sx={{ color: "#1e537d" }} value={40}>
                        16-18
                      </MenuItem>
                      <MenuItem sx={{ color: "#1e537d" }} value={50}>
                        19-21
                      </MenuItem>
                      <MenuItem sx={{ color: "#1e537d" }} value={60}>
                        22-24
                      </MenuItem>
                      <MenuItem sx={{ color: "#1e537d" }} value={70}>
                        25-27
                      </MenuItem>
                      <MenuItem sx={{ color: "#1e537d" }} value={80}>
                        27-30
                      </MenuItem>
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
                      <MenuItem sx={{ color: "gray" }} value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem sx={{ color: "#1e537d" }} value={10}>
                        Maktab o'quvchisi
                      </MenuItem>
                      <MenuItem sx={{ color: "#1e537d" }} value={20}>
                        Oliygoh talabasi
                      </MenuItem>
                      <MenuItem sx={{ color: "#1e537d" }} value={40}>
                        Kompaniya xodimi
                      </MenuItem>
                      <MenuItem sx={{ color: "#1e537d" }} value={50}>
                        Davlat xizmatchisi
                      </MenuItem>
                      <MenuItem sx={{ color: "#1e537d" }} value={60}>
                        Vaqtincha ishsiz
                      </MenuItem>
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

                <li className="taglar">
                  <p>Tag</p>
                  <div>
                    <FormControl className="taglar-controli">
                      <InputLabel id="demo-multiple-checkbox-label">
                        Tag
                      </InputLabel>
                      <Select
                        sx={{ color: "#1e537d" }}
                        className="warm"
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => (
                          <Box
                            sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                          >
                            {selected.map((value) => (
                              <Chip
                                key={value}
                                label={value}
                                sx={{
                                  background: `linear-gradient(
      to top left,
      rgba(255, 255, 255, 0.322),
      rgba(10, 157, 242, 0.212),
      rgba(255, 255, 255, 0.333)
    )`,
                                  boxShadow: `
      0px 6px 12px rgba(0, 145, 255, 0.267),
      inset 0px 2px 4px rgba(255, 255, 255, 0.1),
      inset 0px -2px 4px rgba(0, 0, 0, 0.3)
    `,
                                  color: "#1e537d",
                                }}
                              />
                            ))}
                          </Box>
                        )}
                        MenuProps={MenuProps}
                      >
                        {names.map((name) => (
                          <MenuItem
                            sx={{ color: "#1e537d" }}
                            className="warms"
                            key={name}
                            value={name}
                          >
                            <Checkbox checked={personName.includes(name)} />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className={`lids-modals-panels-content2 ${
                nextPage ? "take-down" : ""
              }`}
            >
              <ul className="content2-registr2">
                <li>
                  <p className="label-brand">Kurs</p>
                  <div ref={optionRef} className="select-box">
                    {/* Selected */}
                    <div
                      ref={ref}
                      className="selected"
                      onClick={() => setOpening(!opening)}
                    >
                      {selection}
                      <span className={`arrow ${opening ? "up" : "down"}`} />
                    </div>

                    {/* Options */}
                    <div
                      ref={ref}
                      className={`options1 ${opening ? "show" : ""}`}
                    >
                      {/* Search input */}
                      <input
                        type="text"
                        placeholder="Qidirish..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="search-input"
                      />

                      {/* Filterlangan options */}
                      {filtered.length > 0 ? (
                        filtered.map((option, idx) => (
                          <div
                            key={idx}
                            className="option"
                            onClick={() => {
                              setSelection(option);
                              setOpening(false);
                              setSearch("");
                            }}
                          >
                            {option}
                          </div>
                        ))
                      ) : (
                        <div className="no-option">Topilmadi</div>
                      )}
                    </div>
                  </div>
                </li>
                <li>
                  <p className="label-brand">Hafta kunlari</p>
                  <div className="weeks">
                    <button>Dush,Chor,Jum</button>
                    <button>Sesh,Pay,Shan</button>
                  </div>
                </li>
                <li>
                  <p className="label-brand">Ma'qul dars vaqtlari</p>
                  <div ref={optionRef3} className="multiselect3">
                    <div
                      ref={ref3}
                      className="selected-box3"
                      onClick={() => setOpen3(!open3)}
                    >
                      {selected3.length > 0
                        ? selected3.join(" | ")
                        : "Vaqt oralig'ini tanlang"}
                      <span className={`arrow3 ${open3 ? "up" : "down"}`} />
                    </div>

                    <div
                      ref={ref3}
                      className={`dropdown3 ${open3 ? "show3" : ""}`}
                    >
                      <input
                        type="text"
                        placeholder="Izlash..."
                        value={search3}
                        onChange={(e) => setSearch3(e.target.value)}
                        className="search-input"
                      />
                      <div className="option3 select-all3" onClick={toggleAll}>
                        <input
                          type="checkbox"
                          checked={selected3.length === options3.length}
                          readOnly
                        />
                        <span>Barchasini tanlash</span>
                      </div>

                      {filtered3.map((opt, i) => (
                        <label key={i} className="option3">
                          <input
                            type="checkbox"
                            checked={selected3.includes(opt)}
                            onChange={() => toggleOne(opt)}
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </li>
                <li>
                  <p className="label-brand">Status</p>
                  <div ref={optionRefStatus} className="select-box">
                    {/* Selected */}
                    <div
                      ref={refStatus}
                      className="selected"
                      onClick={() => setOpeningStatus(!openingStatus)}
                    >
                      {selectionStatus}
                      <span
                        className={`arrow ${openingStatus ? "up" : "down"}`}
                      />
                    </div>

                    {/* Options */}
                    <div
                      ref={refStatus}
                      className={`options ${openingStatus ? "show" : ""}`}
                    >
                      {/* Search input */}
                      <input
                        type="text"
                        placeholder="Qidirish..."
                        value={searchStatus}
                        onChange={(e) => setSearchStatus(e.target.value)}
                        className="search-input"
                      />

                      {/* Filterlangan options */}
                      {filteredStatus.length > 0 ? (
                        filteredStatus.map((option, idx) => (
                          <div
                            key={idx}
                            className="option"
                            onClick={() => {
                              setSelectionStatus(option);
                              setOpeningStatus(false);
                              setSearchStatus("");
                            }}
                          >
                            {option}
                          </div>
                        ))
                      ) : (
                        <div className="no-option">Topilmadi</div>
                      )}
                    </div>
                  </div>
                </li>
                <li>
                  <p className="label-brand">Manba</p>
                  <div ref={optionRefSourcing} className="select-box">
                    {/* Selected */}
                    <div
                      ref={refSourcing}
                      className="selected"
                      onClick={() => setOpeningSourcing(!openingSourcing)}
                    >
                      {selectionSourcing}

                      <span
                        className={`arrow ${openingSourcing ? "up" : "down"}`}
                      />
                    </div>

                    {/* Options */}
                    <div
                      ref={refSourcing}
                      className={`options sourcing ${
                        openingSourcing ? "show" : ""
                      }`}
                    >
                      {/* Search input */}
                      <input
                        type="text"
                        placeholder="Qidirish..."
                        value={searchSourcing}
                        onChange={(e) => setSearchSourcing(e.target.value)}
                        className="search-input"
                      />

                      {/* Filterlangan options */}
                      {filteredSourcing.length > 0 ? (
                        filteredSourcing.map((option, idx) => (
                          <div
                            key={idx}
                            className="option"
                            onClick={() => {
                              setSelectionSourcing(option);
                              setOpeningSourcing(false);
                              setSearchSourcing("");
                            }}
                          >
                            {option}
                          </div>
                        ))
                      ) : (
                        <div className="no-option">Topilmadi</div>
                      )}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={`student-about ${showInput ? "watch" : ""}`}>
        <form action="" className="student-about-informations">
          <div className="lids-modals-information-down">
            <div className="lids-qoshish">
              <button
                onClick={() => {
                  setShowInput(false);
                }}
                className="lids-modals-mark"
              >
                <FaXmark />
              </button>
              <p>Talaba ma'lumotlari</p>
            </div>
            <div className="lids-modals-btns">
              <button type="button">Bekor qilish</button>
              <button type="submit" onClick={handleAddNew}>
                Saqlash
              </button>
            </div>
          </div>
          <ul className="edit-information">
            <li className="filial-btns">
              <p>Filial</p>
              <div className="emirat-btn">
                <button type="button">Emirat</button>
                <button type="button">Xonaqoh</button>
              </div>
            </li>
            <li>
              <label htmlFor="">Ism:</label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                required
              />
            </li>
            <li>
              <label htmlFor="">Familya:</label>
              <input
                type="text"
                value={newName2}
                onChange={(e) => setNewName2(e.target.value)}
                required
              />
            </li>
            <li>
              <label htmlFor="">Sharif:</label>
              <input
                type="text"
                value={newName3}
                onChange={(e) => setNewName3(e.target.value)}
                required
              />
            </li>
            <li className="filial-btns">
              <p>Jins</p>
              <div className="emirat-btn male">
                <button type="button">Erkak</button>
                <button type="button">Ayol</button>
              </div>
            </li>
            <li>
              <label htmlFor="">1-telefon(+998)</label>
              <input type="text" required />
            </li>
            <li>
              <label htmlFor="">2-telefon(+998)</label>
              <input type="text" required />
            </li>
            <li>
              <label htmlFor="">Tug'ilgan sanasi</label>
              <input type="date" required />
            </li>
            <li>
              <label htmlFor="">Vasiy</label>
              <input type="text" required />
            </li>
          </ul>
        </form>
      </div>

      <div className="lids">
        <div className={`container ${sidebar ? "active" : ""}`}>
          <div className="variable">
            <div className={`lids-add-content ${zoomPlus ? "zooms" : ""} ${zoomPlus1 || zoomPlus2 ? "zooms12" : ""}`}>
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

                  <button className="zoom">
                    {zoomPlus ? (
                      <HiXMark
                        onClick={() => {
                          setZoomPlus(false);
                          setAddToLidsUsers(false);
                        }}
                      />
                    ) : (
                      <CgArrowsExpandRight
                        onClick={() => {
                          setZoomPlus(true);
                          setAddToLidsUsers(true);
                        }}
                      />
                    )}
                  </button>
                </div>
              </div>

              <h3 className="status">Status</h3>

              <div className="status-bases">
                <ul className={`status-bar ${addTolidsUsers ? "enlarge" : ""}`}>
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
                    <li
                      onClick={() => {
                        setZoomPlus(true);
                        setAddToLidsUsers(true);
                      }}
                    >
                      <p>
                        Qayta bog'lanishga <span>20</span>
                      </p>
                      <FaChevronRight />
                    </li>
                    <li
                      onClick={() => {
                        setZoomPlus(true);
                        setAddToLidsUsers(true);
                      }}
                    >
                      <p>
                        Sinov darsga yozildi <span>20</span>
                      </p>
                      <FaChevronRight />
                    </li>
                    <li
                      onClick={() => {
                        setZoomPlus(true);
                        setAddToLidsUsers(true);
                      }}
                    >
                      <p>
                        Sinov darsga qatnashdi <span>100</span>
                      </p>
                      <FaChevronRight />
                    </li>
                    <li
                      onClick={() => {
                        setZoomPlus(true);
                        setAddToLidsUsers(true);
                      }}
                    >
                      <p>
                        O'qishni boshladi <span>0</span>
                      </p>
                      <FaChevronRight />
                    </li>
                    <li
                      onClick={() => {
                        setZoomPlus(true);
                        setAddToLidsUsers(true);
                      }}
                    >
                      <p>
                        Ma'qul kelmadi <span>0</span>
                      </p>
                      <FaChevronRight />
                    </li>
                    <li
                      onClick={() => {
                        setZoomPlus(true);
                        setAddToLidsUsers(true);
                      }}
                    >
                      <p>
                        Ma'qul kelmadi(Sifatsiz) <span>0</span>
                      </p>
                      <FaChevronRight />
                    </li>
                    <li
                      onClick={() => {
                        setZoomPlus(true);
                        setAddToLidsUsers(true);
                      }}
                    >
                      <p>
                        Keyinroq o'qiydi <span>0</span>
                      </p>
                      <FaChevronRight />
                    </li>
                  </ul>
                </ul>
                <div
                  className={`user-info-main ${
                    addTolidsUsers ? "enlarge" : ""
                  }`}
                >
                  <div className="user-info-main-contest">
                    <div className="user-info-main-content">
                      {lidContent?.map((item, index) => {
                        return <p key={index}>{item}</p>;
                      })}
                    </div>
                    <div className="user-info-main-list-border">
                      {lidListGroup?.map((item) => {
                        return (
                          <ul key={item?.id} className="user-info-main-list">
                            <li>{item?.tr}</li>
                            <li>
                              {item?.murojaatchi.length > 22
                                ? item?.murojaatchi.slice(0, 20) + "..."
                                : item?.murojaatchi}
                            </li>
                            <li>{item?.taglar}</li>
                            <li>{item?.kurs}</li>
                            <li>{item?.yosh}</li>
                            <li>{item?.holati}</li>
                            <li>{item?.noutbuki}</li>
                            <li>
                              {item?.manba.length > 18
                                ? item?.manba.slice(0, 16) + "..."
                                : item?.manba}
                            </li>
                            <li>{item?.hafta}</li>
                            <li>{item?.dars}</li>
                            <li>
                              {item?.status.length > 18
                                ? item?.status.slice(0, 16) + "..."
                                : item?.status}
                            </li>
                            <li>{item?.guruh}</li>
                            <li>{item?.sinovD}</li>
                            <li>{item?.darsgaQatnashdimi}</li>
                            <li>{item?.qoshilganVaqt}</li>
                            <li>{item?.qoshganShaxs}</li>
                            <li>{item?.ozgartirilganVaqt}</li>
                            <li>{item?.oxiriOzgartirdi}</li>
                            <li>{item?.lidIzoh}</li>
                            <li>{item?.shartnoma}</li>
                            <li>{item?.oy}</li>
                            <li>{item?.yil}</li>
                            <li>{item?.oygaTolov}</li>
                          </ul>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`lids-statistiks ${
                zoomPlus1 || zoomPlus2 ? "zooms1" : ""
              }`}
            >
              <div className={`lids-statistik ${zoomPlus1 ? "maximize" : ""} ${exitTop ? "maximize2":""}`}>
                <div className="lids-title">
                  <h4>Lidlar(Statistika)</h4>
                  <div className="expand">
                    <button className="zoom">
                      {zoomPlus1 ? (
                        <HiXMark
                          onClick={() => {
                            setZoomPlus1(false);
                          }}
                        />
                      ) : (
                        <CgArrowsExpandRight
                          onClick={() => {
                            setZoomPlus1(true);
                          }}
                        />
                      )}
                    </button>
                  </div>
                </div>
                <h3 className="status">Yil</h3>
                <div className="status-bar">
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
                    <li>
                      <p>
                        2024 <span>20</span>
                      </p>
                      <FaChevronRight />
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`lids-payings ${zoomPlus2 ? "maximize1":""}`}>
                <div className="lids-title">
                  <h4>Lidlar(To'lov Qilganlar)</h4>
                  <div className="expand">
                    <button className="zoom">
                      {zoomPlus2 ? (
                        <HiXMark
                          onClick={() => {
                            setZoomPlus2(false);
                            setExitTop(false)
                          }}
                        />
                      ) : (
                        <CgArrowsExpandRight
                          onClick={() => {
                            setZoomPlus2(true);
                            setExitTop(true)
                          }}
                        />
                      )}
                    </button>
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
