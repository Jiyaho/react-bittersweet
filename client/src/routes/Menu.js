import Nav from "components/Nav";
import Footer from "components/Footer";
import styles from "css/App.module.css";
import FormOfMenu from "components/FormOfMenu";
import menuData from "data/menuData.json";
import { useEffect, useState } from "react";

function Menu() {
  const [filteredCategory, setFilteredCategory] = useState(null);
  const menuDatas = menuData.data;
  const buttons = [
    {
      name: "ALL",
      value: "ALL",
    },
    {
      name: "COFFEE",
      value: "COFFEE",
    },
    {
      name: "BEVERAGE",
      value: "BEVERAGE",
    },
    {
      name: "TEA",
      value: "TEA",
    },
  ];

  function filterMenu(cate) {
    let filteredMenu = menuDatas.filter((menu) => menu.category.includes(cate));
    return filteredMenu;
  }

  function handleCate(e) {
    let clickedBtn = e.target.value;
    console.log(clickedBtn);
    clickedBtn.includes("ALL")
      ? setFilteredCategory(menuDatas)
      : setFilteredCategory(filterMenu(clickedBtn));
  }

  useEffect(() => {
    setFilteredCategory(menuDatas);
  }, []);

  return (
    <div>
      <Nav />
      <h2 className={styles.page_title}>MENU</h2>
      <div className={styles.menuCateBtnWrap}>
        {buttons.map((btn, idx) => {
          return (
            <button
              className={styles.cateBtn}
              key={idx}
              onClick={handleCate}
              value={btn.value}
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
                  imgsrc={require(`../images/${menu.url}`)}
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
