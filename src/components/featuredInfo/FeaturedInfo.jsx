import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Kayıtlı Öğrenci Sayısı</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">325</span>
          <span className="featuredMoneyRate">
            Yeni öğrenci sayısı %1.5 <ArrowUpward  className="featuredIcon positive"/>
          </span>
        </div>
        <span className="featuredSub">Geçen Aya Oranla</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Toplam Kurs Sayısı</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">41</span>
          <span className="featuredMoneyRate">
            Toplam Video: 523
          </span>
        </div>
        <span className="featuredSub">Aktif</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sınav Sayısı</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">179</span>
          <span className="featuredMoneyRate">
            Kurs Başına Ortalama Sınav %10.25
          </span>
        </div>
        <span className="featuredSub">Aktif</span>
      </div>
    </div>
  );
}
