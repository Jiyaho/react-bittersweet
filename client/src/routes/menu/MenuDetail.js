import Nav from "components/Nav";
import Footer from "components/Footer";
import FormOfMenuDetail from "components/menu/FormOfMenuDetail";
import menuData from "data/menuData.json";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MenuDetail() {
  const [menus, setMenus] = useState([]);
  const { idx } = useParams();

  const getMenuLists = () => {
    setMenus(menuData.data);
  };

  const filteredMenu = menus.filter((menu) => {
    return menu.idx === idx;
  });

  useEffect(() => {
    getMenuLists();
  }, []);

  return (
    <div>
      <Nav />
      {filteredMenu.map((data) => {
        return (
          <FormOfMenuDetail
            key={data.idx}
            cateBtn={data.category[1]}
            cateBtnLinkTo={`/menu/${data.category[1]}`}
            currentMenu={data.name_ko}
            temperature={
              data.temperature === "HOT"
                ? `${data.temperature} ๐ฅ`
                : `${data.temperature} โ๏ธ`
            }
            menuName_ko={data.name_ko}
            menuName_en={data.name_en}
            menuDesc={data.desc}
            imgsrc={require(`../../images/${data.url}`)}
            imgalt={data.url}
            ์ด๋={data.์ด๋}
            ๋ํธ๋ฅจ={data.๋ํธ๋ฅจ}
            ํฌํ์ง๋ฐฉ={data.ํฌํ์ง๋ฐฉ}
            ๋จ๋ฐฑ์ง={data.๋จ๋ฐฑ์ง}
            ๋น๋ฅ={data.๋น๋ฅ}
            ์นดํ์ธ={data.์นดํ์ธ}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default MenuDetail;
