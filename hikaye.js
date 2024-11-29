alert("Bilgisayar Oyununa hoşgeldiniz.");
let isim = prompt("İsminizi Girin:");
alert(`Merhaba, ${isim}! Bugün bilgisayar başına bir iş için oturdun. Bakalım işi tamamlayabilecekmisin?`);

let secenek1 = prompt("Bilgisayarda önemli bir şifrelenmiş dosya var ve şifresi unutulmuş. Şifreyi çözmek için yazılım mı kullanacaksın yoksa bir uzmanla mı konuşacaksın? (yazılım/uzman))");
if(secenek1 === "yazılım"){
    let secenek2 = prompt("Bir yazılım seçtin, ama iki seçenek var. Ücretsiz yazılımı yoksa ücretli yazılımımı deneyeceksin? (ücretli/ücretsiz)");
    if(secenek2 === "ücretsiz"){
        let secenek3 = prompt("Ücretsiz yazılımı kurarak şifreyi kırdın, ama bir uyarı aldın. 'Bilgisayarınıza virüs bulaşmış olabilir.' Virüsü temizlemek için bir antivirüs mü çalıştıracaksın yoksa görmezden mi geleceksin? (antivirüs/görmezden)");
        if (secenek3 === "antivirüs"){
            alert("Antivirüs bilgisayarı temizledi! Şifreli önemli olan dosyayı başarıyla çözdün. Görev tamamlandı. Tebrikler!");
        }
        else if (secenek3 ==="görmezden"){
            alert("Virüsü görmezden geldin ve kısa süre içerisinde bilgisayardaki dosyalar virüs kaparak kayboldu. Görevi tamamlayamadın!!!");
        }
        else {
            alert("Geçerli seçim yapmadın. Oyun Bitti!")
        }
    }
    else if (secenek2 === "ücretli"){
        let secenek3 = prompt("Ücretli yazılım ile dosyaları başarıyla virüsten temizledin fakat bir lisans doğrulama hatası verdi. Yazılımın lisansını satın almak mı, yoksa başka bir çözüm aramak mı istersin? (satın al/başka)");
        if(secenek3 === "satın al"){
            alert("Lisansı satın aldın ve dosyaları tamamen temizledin. Görev tamamlandı. Tebrikler!");
        }
        else if(secenek3 === "başka"){
            alert("Başka bir çözüm ararken önemli dosya ve diğer dosyalar kayboldu. Malesef Görevi tamamlayamadın!!!");
        }
        else{
            alert("Geçerli seçim yapmadın. Oyun Bitti!")
        }
    }
    else{
        alert("Geçerli seçim yapmadın. Oyun Bitti!")
    }
}
    else if (secenek1 === "uzman"){
        let secenek2 = prompt("Bir uzmanla görüştün. Uzman sana iki seçenek sundu. Uzmanlık hizmetini kabul edip ödeme yapmak mı, yoksa kendi çözümünü denemek mi? (kabul et/kendin çöz)");
    if(secenek2 === "kabul et"){
        let secenek3 = prompot("Uzman dosyaları virüsten kurtardı, ama dosyaların bir kısmı bozuldu. Kurtarılan bilgileri kullanmak mı yoksa bozuk dosyalar için daha fazla ödeme yapmak mı istersin? (kullan/öde)");
    if(secenek3 === "kullan"){
        alert("Kurtarılan dosyalar ile işin tamamlandı. Görev Tamamlandı Tebrikler!");
    }
    else if (secenek3 === "öde"){
        alert("Ek ödeme yaptın, ama uzman dosyaları tam olarak kurtaramadı. Malesef Görevi Tamamlayamadın!!!");
    }
    else{
        alert("Geçerli seçim yapmadın. Oyun Bitti!")
    }
    }
    else if( secenek2 == "kendin çöz"){
        let secenek3 = prompt("Kendi çözümünü denemek için bir kod yazıyorsun. Ama  kodunda bir hata var. Hata ayıklamak mı yoksa yeni bir çözüm denemek mi? (hata ayıkla/yeni çözüm)");
        if(secenek3 === "hata ayıkla"){
            alert("Hata ayıklamayı başardın ve dosyayı başarıyla şifrelemeden kurtardın. Görev Tamamlandı. Tebrikler!");
        }
        else if(secenek3 === "yeni çözüm"){
            alert("Yeni çözüm denerken dosyayı tamamen kaybettin. Malesef Görevi Tamamlayamadın!!!");0
        }
        else{
            alert("Geçerli seçim yapmadın. Oyun Bitti!")
        }
    }
    else{
        alert("Geçerli seçim yapmadın. Oyun Bitti!")
    }
    }
    else{
        alert("Geçerli seçim yapmadın. Oyun Bitti!")
    }