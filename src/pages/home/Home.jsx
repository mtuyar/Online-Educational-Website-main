import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function AdminHome() {
  return (
    <div style={{}}>
      <Topbar/>
      <div style={{ width:"100%", display:"flex"}}>
        <Sidebar />
        <div className="home">
          <FeaturedInfo />
          <Chart data={userData} title="Kullanıcı Analizi" grid dataKey="Aktif Kullanıcılar" />
          <div className="homeWidgets">
            <WidgetSm />
            <WidgetLg />
          </div>
        </div>
      </div>
    </div>
  );
}
