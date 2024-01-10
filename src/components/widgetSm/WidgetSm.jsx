import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Yeni Kayıtlar</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://m.media-amazon.com/images/I/41upXyPIX5L._AC_SY780_.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Mehmet Taha Uyar</span>
            <span className="widgetSmUserTitle">Öğrenci</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://m.media-amazon.com/images/I/41upXyPIX5L._AC_SY780_.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Mehmet Taha Uyar</span>
            <span className="widgetSmUserTitle">Öğrenci</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://m.media-amazon.com/images/I/41upXyPIX5L._AC_SY780_.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Mehmet Taha Uyar</span>
            <span className="widgetSmUserTitle">Öğrenci</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://m.media-amazon.com/images/I/41upXyPIX5L._AC_SY780_.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Mehmet Taha Uyar</span>
            <span className="widgetSmUserTitle">Öğrenci</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://m.media-amazon.com/images/I/41upXyPIX5L._AC_SY780_.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Mehmet Taha Uyar</span>
            <span className="widgetSmUserTitle">Öğrenci</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
