import React, { useState } from "react";
import "./courseWatch.css"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./courseWatch.css"
import 'font-awesome/css/font-awesome.min.css'; // Bu satırı ekleyin
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Book, BookRounded, CheckBox, PlayCircleOutlineOutlined, VideoLibrary } from "@material-ui/icons";
import { BookOnline, Check, PlayCircleOutline, PlayLesson } from "@mui/icons-material";
import { Checkbox, Divider, ListItem } from "@mui/material";
import ReactPlayer from 'react-player';

const courseData = {
    "title": "Arapça Gramer Kursu",
    "sections": [
        {
            "title": "1. Alfabe ve Harfler",
            "subsections": [
                {
                    "title": "1.1 Harflerin Tanıtımı",
                    "content": "Arap alfabesinde bulunan harflerin tanıtımı ve sesleri."
                },
                {
                    "title": "1.2 Sesli ve Sessiz Harfler",
                    "content": "Sesli ve sessiz harfleri ayırt etme becerisi."
                },
                {
                    "title": "1.3 Harf Bağlamaları",
                    "content": "Harf bağlamalarını anlama ve uygulama."
                },
                {
                    "title": "1.4 Harf Okunuşları",
                    "content": "Belirli harflerin farklı okunuşlarını öğrenme."
                },
                {
                    "title": "1.5 İmla Kuralları",
                    "content": "Temel imla kurallarını öğrenme ve uygulama."
                },
                {
                    "title": "1.6 Hece Yapısı",
                    "content": "Kelimeleri doğru bir şekilde hecelemek ve hece yapısını anlama."
                },
                {
                    "title": "1.7 Alfabe Egzersizleri",
                    "content": "Alfabeyi pekiştirmek için çeşitli egzersizler ve aktiviteler."
                }
            ]
        },
        {
            "title": "2. Kelimeler ve Cümleler",
            "subsections": [
                {
                    "title": "2.1 Temel Kelimeler",
                    "content": "Günlük yaşamda sık kullanılan temel kelimelerin öğrenilmesi."
                },
                {
                    "title": "2.2 Cümle Yapısı",
                    "content": "Basit cümle oluşturma kuralları ve pratikleri."
                },
                {
                    "title": "2.3 Kelime Bağlantıları",
                    "content": "Kelimeleri doğru bir şekilde birleştirme ve bağlama yeteneği."
                },
                {
                    "title": "2.4 İfadeler ve Diyaloglar",
                    "content": "Günlük konuşma ifadelerini ve diyalogları anlama ve kullanma."
                },
                {
                    "title": "2.5 Kelime Egzersizleri",
                    "content": "Öğrenilen kelimeleri kullanarak pratik yapma ve öğrenmeyi pekiştirme."
                },
                {
                    "title": "2.6 Cümle Analizi",
                    "content": "Cümleleri analiz etme ve yapılarını anlama yeteneği."
                },
                {
                    "title": "2.7 Pratik Konuşma",
                    "content": "Arapça konuşma pratiği yapma ve iletişim becerilerini geliştirme."
                }
            ]
        },
        {
            "title": "3. Gramer Kuralları",
            "subsections": [
                {
                    "title": "3.1 Fiil Çekimleri",
                    "content": "Arapça fiil çekim kurallarını öğrenme ve uygulama."
                },
                {
                    "title": "3.2 Zamirler",
                    "content": "Arapça zamir kullanımı ve çeşitleri."
                },
                {
                    "title": "3.3 İsim Tamlamaları",
                    "content": "İsim tamlamalarının kuralları ve örnekleri."
                },
                {
                    "title": "3.4 Zaman İfadeleri",
                    "content": "Zaman ifadelerini doğru bir şekilde kullanma ve anlama."
                },
                {
                    "title": "3.5 Bağlaçlar",
                    "content": "Cümleleri bağlamak için doğru bağlaçları seçme yeteneği."
                },
                {
                    "title": "3.6 Gramer Egzersizleri",
                    "content": "Arapça gramerini pekiştirmek için çeşitli egzersizler ve aktiviteler."
                },
                {
                    "title": "3.7 Sözlü Anlatım Becerileri",
                    "content": "Arapça olarak konuşma ve yazma becerilerini geliştirme."
                }
            ]
        },
        {
            "title": "4. Kelime Bilgisi ve Anlam",
            "subsections": [
                {
                    "title": "4.1 Temel Kelime Bilgisi",
                    "content": "Arapça dilinde temel kelime bilgisi ve öğrenme stratejileri."
                },
                {
                    "title": "4.2 Kelime Anlamı",
                    "content": "Kelimelerin doğru anlamını çıkarma ve kullanma."
                },
                {
                    "title": "4.3 Yeni Kelimeler Öğrenme",
                    "content": "Yeni kelimeleri etkili bir şekilde öğrenme teknikleri."
                },
                {
                    "title": "4.4 Kelime Kartları Kullanma",
                    "content": "Kelime kartları ile kelime bilgisini pekiştirme yöntemleri."
                },
                {
                    "title": "4.5 Kelime Analizi",
                    "content": "Kelime kökenleri ve yapıları üzerinde analiz yapma."
                },
                {
                    "title": "4.6 Kelime Testleri",
                    "content": "Kelime bilgisini ölçen çeşitli testler ve uygulamalar."
                },
                {
                    "title": "4.7 Kelime Oyunları",
                    "content": "Eğlenceli kelime oyunları ile kelime bilgisini güçlendirme."
                }
            ]
        },
        {
            "title": "5. Yazım Kuralları ve Noktalama İşaretleri",
            "subsections": [
                {
                    "title": "5.1 Temel Yazım Kuralları",
                    "content": "Arapça yazım kurallarının temel prensipleri ve uygulamaları."
                },
                {
                    "title": "5.2 Noktalama İşaretleri",
                    "content": "Noktalama işaretlerini doğru bir şekilde kullanma becerisi."
                },
                {
                    "title": "5.3 Paragraf Yapısı",
                    "content": "Doğru paragraf yapısı oluşturma ve metinleri düzenleme."
                },
                {
                    "title": "5.4 Yazım Egzersizleri",
                    "content": "Yazım kurallarını pekiştirmek için çeşitli egzersizler."
                },
                {
                    "title": "5.5 Yazılı Kompozisyon",
                    "content": "Arapça yazılı kompozisyon yazma becerilerini geliştirme."
                },
                {
                    "title": "5.6 Yazım Hataları Düzeltme",
                    "content": "Yazım hatalarını tespit etme ve düzeltme yöntemleri."
                },
                {
                    "title": "5.7 Yazılı İfade Sanatları",
                    "content": "Yazılı ifade sanatlarına dair temel bilgiler ve uygulamalar."
                }
            ]
        },
        {
            "title": "6. Dilbilgisi ve Dil Anlatımı",
            "subsections": [
                {
                    "title": "6.1 Dilbilgisi Kuralları",
                    "content": "Arapça dilbilgisi kurallarını öğrenme ve uygulama."
                },
                {
                    "title": "6.2 Dil Anlatımı",
                    "content": "Dilin etkili bir şekilde kullanımı ve ifade yeteneği."
                },
                {
                    "title": "6.3 Anlatım Teknikleri",
                    "content": "Metinleri etkili bir şekilde anlatma teknikleri."
                },
                {
                    "title": "6.4 Anlatım Becerileri Geliştirme",
                    "content": "Arapça dilindeki anlatım becerilerini geliştirme."
                },
                {
                    "title": "6.5 Dilbilgisi Egzersizleri",
                    "content": "Dilbilgisi kurallarını pekiştirmek için çeşitli egzersizler."
                },
                {
                    "title": "6.6 Anlatım Çalışmaları",
                    "content": "Farklı türlerdeki metinler üzerinde anlatım çalışmaları."
                },
                {
                    "title": "6.7 Dil Kullanımı ve İfade",
                    "content": "Dilin doğru ve etkili bir şekilde kullanımı üzerine pratiikler."
                }
            ]
        },
        {
            "title": "7. Konuşma ve İletişim Becerileri",
            "subsections": [
                {
                    "title": "7.1 Temel Konuşma Becerileri",
                    "content": "Arapça olarak temel konuşma becerilerini geliştirme."
                },
                {
                    "title": "7.2 İletişim Stratejileri",
                    "content": "Etkili iletişim için kullanılabilecek stratejiler."
                },
                {
                    "title": "7.3 Tartışma ve Sunum",
                    "content": "Tartışma ve sunum yapma becerilerini geliştirme."
                },
                {
                    "title": "7.4 İkna ve Anlatım",
                    "content": "İkna etme ve anlatım becerilerini güçlendirme."
                },
                {
                    "title": "7.5 Günlük Konuşmalar",
                    "content": "Günlük konuşmalarda kullanılan ifadeler ve cümleler."
                },
                {
                    "title": "7.6 Sesli Okuma",
                    "content": "Arapça metinleri doğru bir şekilde sesli okuma pratiği."
                },
                {
                    "title": "7.7 İletişim Egzersizleri",
                    "content": "Etkili iletişim için çeşitli egzersizler ve aktiviteler."
                }
            ]
        }
    ]
};


const CourseWatch = () => {
    const [openList, setOpenList] = useState(courseData.sections.map(() => false));

    const handleClick = (index) => {
        const updatedOpenList = [...openList];
        updatedOpenList[index] = !updatedOpenList[index];
        setOpenList(updatedOpenList);
    };

    const renderSubsections = (subsections) => {
        return subsections.map((subsection, index) => (
            <ListItemButton key={index}>
                <ListItemIcon>
                    <Checkbox />
                </ListItemIcon>
                <ListItemText primary={subsection.title} />
            </ListItemButton>
        ));
    };


    const renderSections = (sections) => {
        return sections.map((section, index) => (
            <div key={index}>
                <ListItemButton
                    style={{ display: 'flex', minHeight: 61, maxHeight: 'auto' }}
                    onClick={() => handleClick(index)}
                >
                    <ListItemIcon>
                        <VideoLibrary />
                    </ListItemIcon>
                    <ListItemText primary={section.title} />
                    {openList[index] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Divider sx={{ backgroundColor: 'black' }} />
                <Collapse in={openList[index]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {renderSubsections(section.subsections)}
                    </List>
                </Collapse>
            </div>
        ));
    };
    /*                    <iframe
                            scrolling="yes"
                            src="https://www.youtube.com/watch?v=AyVWBFWzgo8autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0"
                            style={{ height: '100%', width: '100%' }}
                            sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
                        ></iframe>*/

    const preventDoubleClick = (event) => {
        event.preventDefault();
        alert("Çift tıklama engellendi!");
        // Burada başka bir işlem yapabilir veya hiçbir şey yapmayabilirsiniz.
    };
    return (
        <div>
            <Header />
            <div className="App">
                <div className="videoSide">
                    <iframe
                        scrolling="yes"
                        src="https://www.youtube.com/embed/RV64x6DWe9Q?si=ffMrZXU-sfnUhOd1autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showinfo=0&showsearch=0"
                        style={{ height: '80%', width: '100%', marginTop: '1%' }}
                        sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
                    ></iframe>
                </div>
                <div className="contentSide">
                    <div style={{ backgroundColor: 'red' }}>
                        <List
                            sx={{
                                width: '100%',
                                maxWidth: '100%',
                                marginTop: '15%',
                                bgcolor: 'background.paper',
                                color: 'black',
                            }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            subheader={
                                <ListSubheader
                                    component="div"
                                    id="nested-list-subheader"
                                    style={{ fontSize: '19px' }}>
                                    Kurs İçeriği
                                </ListSubheader>
                            }
                        >
                            {renderSections(courseData.sections)}
                        </List>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CourseWatch;