import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  VideoCall,
  Videocam,
  Book,
  BookSharp,
  BookTwoTone,
  LibraryBooks,
  School,
  LibraryAdd,
  Home,
  Info,
  QuestionAnswer,
  Add,
  ListAlt
} from "@material-ui/icons";
import { List } from "@mui/material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Yönetim Paneli</h3>
          <ul className="sidebarList">
            <Link to="/admin-panel2" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Giriş
              </li>
            </Link>
            <li className="sidebarListItem">
              <VideoCall className="sidebarIcon" />
              Video Yükle
            </li>
            <li className="sidebarListItem">
              <Videocam className="sidebarIcon" />
              Videoları Listele
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Hızlı Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Kullanıcılar
              </li>
            </Link>
            <Link to="" className="link">
              <li className="sidebarListItem">
                <LibraryAdd className="sidebarIcon" />
                Kurs Ekle
              </li>
            </Link >
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <LibraryBooks className="sidebarIcon" />
                Kursları Listele
              </li>
            </Link>
            <li className="sidebarListItem">
              <Add className="sidebarIcon" />
              Kurs Soruları Tanımlama
            </li>
            <li className="sidebarListItem">
              <ListAlt className="sidebarIcon" />
              Kurs Soruları Listeleme
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Sayfaları Düzenle</h3>
          <ul className="sidebarList">
          <li className="sidebarListItem">
              <Home className="sidebarIcon" />
              Ana Sayfa
            </li>
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Ders Notları
            </li>
            <li className="sidebarListItem">
              <QuestionAnswer className="sidebarIcon" />
              Sık Sorulan Sorular
            </li>
            <li className="sidebarListItem">
              <Info className="sidebarIcon" />
              Hakkımızda
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Ek</h3>
          <ul className="sidebarList">
          <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Yorumlar
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analiz
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Rapor
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
