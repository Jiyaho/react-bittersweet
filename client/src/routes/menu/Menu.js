import Nav from "components/Nav";
import Footer from "components/Footer";
import styles from "css/App.module.css";
import FormOfMenu from "components/menu/FormOfMenu";
import menuData from "data/menuData.json";
import { useEffect, useState } from "react";
import ScrollBtn from "components/ScrollBtn";
import { useNavigate } from "react-router-dom";

function Menu() {
  const [filteredCategory, setFilteredCategory] = useState(null);
  const menuDatas = menuData.data;
  const navigate = useNavigate();
  const buttons = [
    {
      name: "ALL",
      value: "all",
    },
    {
      name: "COFFEE",
      value: "coffee",
    },
    {
      name: "BEVERAGE",
      value: "beverage",
    },
    {
      name: "TEA",
      value: "tea",
    },
  ];

  function handleCate(e) {
    let clickedBtn = e.target.value;
    if (clickedBtn.includes("all")) {
      navigate("/menu");
    } else {
      navigate(`/menu/${clickedBtn}`);
    }
  }

  useEffect(() => {
    setFilteredCategory(menuDatas);
  }, []);

  return (
    <div>
      <Nav />
      <ScrollBtn />
      <h2 className={styles.page_title}>MENU</h2>
      <div className={styles.menuCateBtnWrap}>
        {buttons.map((btn, idx) => {
          return (
            <button
              className={styles.cateBtn}
              key={idx}
              value={btn.value}
              onClick={handleCate}
            >
              {btn.name}
            </button>
          );
        })}
      </div>
      <div className={styles.menu}>
        <ul>
          {filteredCategory &&
            filteredCategory.map((menu) => {
              return (
                <FormOfMenu
                  key={menu.idx}
                  idx={menu.idx}
                  menuName={menu.name_ko}
                  imgsrc={require(`../../images/${menu.url}`)}
                  imgalt={menu.url}
                />
              );
            })}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Menu;
