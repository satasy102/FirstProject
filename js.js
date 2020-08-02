//on/off menu
function showMenu() {
    document.getElementById('nav').style.display = 'block';
}

function closeMenu() {
    document.getElementById('nav').style.display = "none";
}

//Slide chạy
//khai báo biến slideIndex đại diện cho slide hiện tại
let slideIndex;
// KHai bào hàm hiển thị slide
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
    //chuyển đến slide tiếp theo
    slideIndex++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex > slides.length - 1) {
        slideIndex = 0
    }
    //tự động chuyển đổi slide sau 5s
    setTimeout(showSlides, 5000);
}
//mặc định hiển thị slide đầu tiên 
showSlides(slideIndex = 0);
function currentSlide(n) {
    showSlides(slideIndex = n);
}

//Kiểm tra Email

function result(a) {
    let result = checkEmail(a);
    return result;
}

function checkEmail(the_email) {

    let at = the_email.indexOf("@");
    let dot = the_email.lastIndexOf(".");
    let space = the_email.indexOf(" ");
    if (the_email.length !== 0) {
        if ((at != -1) && //có ký tự @
            (at != 0) && //ký tự @ không nằm ở vị trí đầu
            (dot != -1) && //có ký tự .
            (dot > at + 1) && (dot < the_email.length - 1) //phải có ký tự nằm giữa @ và . cuối cùng
            &&
            (space == -1)) //không có khoẳng trắng
        {
            document.getElementById('circle').style.backgroundColor = "white";
            document.getElementById('circle').style.color = 'green';
            document.getElementById('circle').innerHTML = '&#10004;';
            document.getElementById('check').style.display = "none";
            document.getElementById('email').style.color = "blue";
            document.getElementById('email').style.borderColor = "rgb(35, 212, 12)";
        } else {
            document.getElementById('circle').style.display = "block";
            document.getElementById('circle').innerHTML = 'x';
            document.getElementById('circle').style.color = 'red'
            document.getElementById('check').style.display = "block";
            document.getElementById('check').innerHTML = "Địa chỉ Email không đúng!";
            document.getElementById('email').style.color = "red";
            document.getElementById('email').style.borderColor = "red";
            return false;
        }
    } else {
        document.getElementById('circle').style.display = "none";
        document.getElementById('check').innerHTML = "Xin nhập địa chỉ Email";
        return false;
    }
}

function closeX() {
    document.getElementById('input').style.display = "none";
}

function mail() {
    document.getElementById('input').style.display = 'flex';
}

//Chức năng tìm kiếm
function search(evt) {
    evt.preventDefault();

    let obj = {
        title: ['[VCS Mùa Hè 2020 Tuần 7 Ngày 1] PER vs. GAM Esports, OPG vs. Team Secret: Cuộc chiến giữa hai thái cực',
            '[VCS Mùa Hè 2020] Team Flash – Phải chăng thất bại đầu mùa chỉ là để “lọc fan”?',
            'CHÍNH THỨC: Percent Esports chuyển mình với hai nhà đầu tư mới!',
            '[VCS Mùa Hè 2020] TS KingJ: “Lúc làm tuyển thủ thì mình đau tay, bây giờ làm huấn luyện viên thì đau đầu”',
            '[VCS Mùa Hè 2020] Đội Hình Tiêu Biểu Tuần 6: Team Secret rực sáng',
            '[VCS Mùa Hè 2020] Tổng kết tuần thi đấu thứ 6: CES không còn thống trị, Team Flash leo một mạch lên ngôi đầu',
            'Tham gia “Hoa Linh Chiếu Dụ” – Gửi thiệp hảo hữu, hội tụ anh hùng từ 23/07 đến 09/08',
            'Quy đổi RP – Hoàn trả ngay 60% giá trị từ 00:30 23/07 đến 23:59 29/07',
            'Ra mắt Vé Hoa Linh Lục Địa – Mua vé giá rẻ, mở khóa nhiệm vụ và quà tặng độc quyền từ 23/07 đến 25/08',
            'Founder WeScan – Tinikun: “Team TG và V Gaming sẽ là 2 cái tên sáng giá cho chức vô địch WeScan Academy Challenge”',
            'Tham gia “Mua 1 Tặng 2” – Ưu đãi đặc biệt, giá trị siêu hấp dẫn từ 17/07 đến 22/07',
            'Một số lời khuyên hữu ích sẽ giúp bạn cải thiện trải nghiệm khi leo hạng Liên Minh Huyền Thoại',
            'Hướng dẫn lối chơi Lillia đi rừng “Nện phát chết luôn”',
            'Phá đảo bậc xếp hạng cùng Sett phiên bản chỉ lao về phía trước',
            'Khởi đầu vòng rừng một cách hoàn hảo với Nụ Hoa Bẽn Lẽn Lillia',
            '[Phá đảo Đấu Trường Chân Lý] Ung thư không lối thoát với đội hình Hộ Vệ Bí Ẩn',
            'SINH NHẬT 8 TUỔI QUÀ FREE ĐẦY TÚI',
            'TOP 5 tướng được tăng sức mạnh bản 10.15: Yuumi được tăng sức mạnh trở lại',
            'SIÊU KHUYẾN MÃI TRỨNG NHÓM 8 – Từ 25.07 đến 29.07',
            'Cơn ác mộng ghép nhầm đồ đã không còn khi Riot chuẩn bị ra mắt Thiên Hà Tách Đồ',
            'Công bố cuộc thi vẽ tranh Sinh Nhật 8 Tuổi x Hoa Linh Lục Địa – Tổng giải thưởng lên tới 200 triệu từ 27/07!',
            'Kog’Maw 3 sao bắn cực điên cuồng',
            'Chiến thuật nâng 9 sớm với Bard hack kinh nghiệm',
            'Nightblue3 Đi Rừng với Ekko cực kinh dị',
            'Xin Zhao Vệ Binh Tinh Tú chọc sát thương chuẩn cực thốn',
            'Tiêu điểm trang phục: Teemo Phong Linh Tiểu Quái',
            'Nhân vật quyền lực nhất ở GMH EVOS – HARBINGER DIARY',
            'WeScan Academy Challenge – Giải đấu LMHT dành cho các tài năng trẻ chính thức khởi tranh vào ngày 21/7',
            'Phản ứng cộng đồng về bản 10.13: Mèo Yuumi ăn quả nerf đau',
            'Phản ứng cộng đồng về bản 10.11: Fiddlesticks sớm trở thành trùm khu rừng thôi!',
            'Phản ứng cộng đồng về bản 10.10: Riot lại muốn cho Soraka lên Đường Trên sao?',
            'Sẽ như thế nào nếu Leona được ra mắt vào mùa 10?',
            'Lạc vào xứ Hoa Linh cùng bộ ảnh cosplay Ahri Hoa Linh Lục Địa đầy quyến rũ',
            'Tổng hợp fanart dòng trang phục Hoa Linh Lục Địa',
            'Tổng hợp fanart siêu đáng yêu về Nụ Hoa Bẽn Lẽn Lillia',
            'Tham gia “Hoa Linh Lữ Quán” – Tặng quà kết duyên, rước ngay anh hùng từ 23/07 đến 05/08',
            'Tiêu điểm trang phục: Vayne Tuyệt Vọng Chi Tiễn | Hoa Linh Lục Địa 2020',
            'Tiêu điểm trang phục: Thresh Ẩn Diện Quỷ Thần | Hoa Linh Lục Địa 2020',
            'Quy đổi RP – Nhận miễn phí trang phục khi đạt mốc từ 10:00 30/07 đến 00:00 06/08',
            'Tham gia “Hoa Linh Thiên Thư” – Hốt hàng Tuyệt Phẩm với giá ưu đãi từ 10:00 30/07 đến 05/08',
            'Tham gia “Liên Kết Hoa Linh” – Trải nghiệm có 1-0-2, nhận nhiều quà tặng giá trị từ 23/07 đến 25/08'
        ],
        link: ['http://lienminh360.vn/esports/vcs-mua-he-2020-tuan-7-ngay-1-per-vs-gam-esports-opg-vs-team-secret-cuoc-chien-giua-hai-thai-cuc/',
            'http://lienminh360.vn/esports/vcs-mua-he-2020-team-flash-phai-chang-that-bai-dau-mua-chi-la-de-loc-fan/',
            'http://lienminh360.vn/esports/chinh-thuc-percent-esports-chuyen-minh-voi-hai-nha-dau-tu-moi/',
            'http://lienminh360.vn/esports/vcs-mua-he-2020-ts-kingj-luc-lam-tuyen-thu-thi-minh-dau-tay-bay-gio-lam-huan-luyen-vien-thi-dau-dau/',
            'http://lienminh360.vn/esports/vcs-mua-he-2020-doi-hinh-tieu-bieu-tuan-6-team-secret-ruc-sang/',
            'http://lienminh360.vn/esports/vcs-mua-he-2020-tong-ket-tuan-thi-dau-thu-6-ces-khong-con-thong-tri-team-flash-leo-mot-mach-len-ngoi-dau/',
            'http://lienminh360.vn/tin-game/tham-gia-hoa-linh-chieu-du-gui-thiep-hao-huu-hoi-tu-anh-hung-tu-2307-den-0908/',
            'http://lienminh360.vn/tin-game/quy-doi-rp-hoan-tra-ngay-60-gia-tri-tu-0030-2307-den-2359-2907/',
            'http://lienminh360.vn/tin-game/ra-mat-ve-hoa-linh-luc-dia-mua-ve-gia-re-mo-khoa-nhiem-vu-va-qua-tang-doc-quyen-tu-2307-den-2508/',
            'http://lienminh360.vn/esports/founder-wescan-tinikun-team-tg-va-v-gaming-se-la-2-cai-ten-sang-gia-cho-chuc-vo-dich-wescan-academy-challenge/',
            'http://lienminh360.vn/tin-game/tham-gia-mua-1-tang-2-uu-dai-dac-biet-gia-tri-sieu-hap-dan-tu-1707-den-2207/',
            'http://lienminh360.vn/cam-nang/mot-so-loi-khuyen-huu-ich-se-giup-ban-cai-thien-trai-nghiem-khi-leo-hang-lien-minh-huyen-thoai/',
            'http://lienminh360.vn/cam-nang/huong-dan-loi-choi-lillia-di-rung-nen-phat-chet-luon/',
            'http://lienminh360.vn/cam-nang/pha-dao-bac-xep-hang-cung-sett-phien-ban-chi-lao-ve-phia-truoc/',
            'http://lienminh360.vn/cam-nang/khoi-dau-vong-rung-mot-cach-hoan-hao-voi-nu-hoa-ben-len-lillia/',
            'http://lienminh360.vn/cam-nang/pha-dao-dau-truong-chan-ly-ung-thu-khong-loi-thoat-voi-doi-hinh-ho-ve-bi-an/',
            'http://lienminh360.vn/tin-game/sinh-nhat-8-tuoi-qua-free-day-tui/',
            'http://lienminh360.vn/tin-game/top-5-tuong-duoc-tang-suc-manh-ban-10-15-yuumi-duoc-tang-suc-manh-tro-lai/',
            'http://lienminh360.vn/tin-game/sieu-khuyen-mai-trung-nhom-8-tu-25-07-den-29-07/',
            'http://lienminh360.vn/tin-game/con-ac-mong-ghep-nham-do-da-khong-con-khi-riot-chuan-bi-ra-mat-thien-ha-tach-do/',
            'http://lienminh360.vn/tin-game/cong-bo-cuoc-thi-ve-tranh-sinh-nhat-8-tuoi-x-hoa-linh-luc-dia-tong-giai-thuong-len-toi-200-trieu-tu-2707/',
            'http://lienminh360.vn/video/kogmaw-3-sao-ban-cuc-dien-cuong/',
            'http://lienminh360.vn/video/chien-thuat-nang-9-som-voi-bard-hack-kinh-nghiem/',
            'http://lienminh360.vn/video/nightblue3-di-rung-voi-ekko-cuc-kinh-di/',
            'http://lienminh360.vn/video/xin-zhao-ve-binh-tinh-tu-choc-sat-thuong-chuan-cuc-thon/',
            'http://lienminh360.vn/video/tieu-diem-trang-phuc-teemo-phong-linh-tieu-quai/',
            'http://lienminh360.vn/video/nhan-vat-quyen-luc-nhat-o-gmh-evos-harbinger-diary/',
            'http://lienminh360.vn/cong-dong/phan-ung-cong-dong-ve-ban-10-13-meo-yuumi-an-qua-nerf-dau/',
            'http://lienminh360.vn/cong-dong/phan-ung-cong-dong-ve-ban-10-11-fiddlesticks-som-tro-thanh-trum-khu-rung-thoi/',
            'http://lienminh360.vn/cong-dong/phan-ung-cong-dong-ve-ban-10-10-riot-lai-muon-cho-soraka-len-duong-tren-sao/',
            'http://lienminh360.vn/cong-dong/se-nhu-the-nao-neu-leona-duoc-ra-mat-vao-mua-10/',
            'http://lienminh360.vn/hinh-anh-cosplay/lac-vao-xu-hoa-linh-cung-bo-anh-cosplay-ahri-hoa-linh-luc-dia-day-quyen-ru/',
            'http://lienminh360.vn/hinh-anh-cosplay/tong-hop-fanart-dong-trang-phuc-hoa-linh-luc-dia/',
            'http://lienminh360.vn/hinh-anh-cosplay/tong-hop-fanart-sieu-dang-yeu-ve-nu-hoa-ben-len-lillia/',
            'http://lienminh360.vn/tin-game/tham-gia-hoa-linh-lu-quan-tang-qua-ket-duyen-ruoc-ngay-anh-hung-tu-2307-den-0508/',
            'http://lienminh360.vn/video/tieu-diem-trang-phuc-vayne-tuyet-vong-chi-tien-hoa-linh-luc-dia-2020/',
            'http://lienminh360.vn/video/2375031/',
            'http://lienminh360.vn/tin-game/quy-doi-rp-nhan-mien-phi-trang-phuc-khi-dat-moc-tu-1000-3007-den-0000-0608/',
            'http://lienminh360.vn/tin-game/tham-gia-hoa-linh-thien-thu-hot-hang-tuyet-pham-voi-gia-uu-dai-tu-1000-3007-den-0508/',
            'http://lienminh360.vn/tin-game/tham-gia-lien-ket-hoa-linh-trai-nghiem-co-1-0-2-nhan-nhieu-qua-tang-gia-tri-tu-2307-den-2508/'
        ],

        image: [
            './image/1.jpg', './image/2.jpg', './image/3.jpg', './image/4.jpg', './image/5.jpg',
            './image/6.jpg', './image/7.jpg', './image/8.jpg', './image/9.jpg', './image/10.jpg',
            './image/11.jpg', './image/12.jpg', './image/13.jpg', './image/14.jpg', './image/15.jpg',
            './image/16.jpg', './image/17.jpg', './image/18.jpg', './image/19.jpg', './image/20.jpg',
            './image/21.jpg', './image/22.jpg', './image/23.jpg', './image/24.jpg', './image/25.jpg',
            './image/26.jpg', './image/27.jpg', './image/28.jpg', './image/29.jpg', './image/30.jpg',
            './image/31.jpg', './image/32.jpg', './image/33.jpg', './image/34.jpg', './image/35.jpg',
            './image/36.jpg', './image/37.jpg', './image/38.jpg', './image/39.jpg', './image/40.jpg',
            './image/41.jpg',
        ],

        change_alias: function (alias) {
            let str = alias;
            str = str.toLowerCase();
            str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
            str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
            str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
            str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
            str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
            str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
            str = str.replace(/đ/g, "d");
            str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
            str = str.replace(/\s+/g, '');
            return str;
        },

        resultSearch: function () {
            document.getElementById('container-search').style.display = 'block';
            document.getElementById('container-main').style.display = 'none';
            document.getElementById('result-search').innerHTML = '';
            if (document.getElementById('nav').style.display != '') {
                inputSearch = document.getElementById('searchInput1');
            } else inputSearch = document.getElementById('searchInput');

            let filter = this.change_alias(inputSearch.value);
            let hasResult = false;

            for (let i = 0; i < this.title.length; i++) {
                let x = this.change_alias(this.title[i].toString().toLowerCase());
                if (x.includes(filter)) {
                    document.getElementById('result-search').innerHTML += `
                    <div class="single-article clearfix">
                        <figure>
                            <a class="bx-img" href="${this.link[i]}">
                                <img width="600" height="338" src="${this.image[i]}">
                            </a>
                        </figure>
                        <div class="article-content">
                            <h3 class="entry-title">
                                <a href="${this.link[i]}">${this.title[i]}</a>
                            </h3>
                        </div>
                    </div>`;
                    hasResult = true;
                }
            }

            if (!hasResult) {
                document.getElementById('result-search').innerHTML = 'Không Tìm Thấy!!!';
            }
        }
    };

    obj.resultSearch();
}
