import Nav from "components/Nav";
import Footer from "components/Footer";
import FormOfMenuDetail from "components/FormOfMenuDetail";
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
            menuCate={data.category[1]}
            currentMenu={data.name_ko}
            temperature={
              data.temperature === "HOT"
                ? `${data.temperature} 🔥`
                : `${data.temperature} ❄️`
            }
            menuName_ko={data.name_ko}
            menuName_en={data.name_en}
            menuDesc={data.desc}
            imgsrc={require(`../images/${data.url}`)}
            imgalt={data.url}
            열량={data.열량}
            나트륨={data.나트륨}
            포화지방={data.포화지방}
            단백질={data.단백질}
            당류={data.당류}
            카페인={data.카페인}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default MenuDetail;
