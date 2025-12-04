
const SeedDB = {
  user: {
    email: "admin@invitation.com",
    username: "admin",
    password: "$2a$10$vR3uDX0WHwzfg3JT9XhZd.9jFwTz2sIExfCsneF2lzyKtVDB/Hlya", //Vuejs@2025
    password_confirm: "$2a$10$vR3uDX0WHwzfg3JT9XhZd.9jFwTz2sIExfCsneF2lzyKtVDB/Hlya",
    role: "admin"
  },
  dataConfig: {
    male: {
      name: "Vũ Doãn Long",
      qr: "/assets/images/qr-male.jpg",
      parent: {
        father: "Vũ Thành Đô",
        mother: "Đỗ Thị Liên"
      },
      location: {
        text: "Ga Tiên Kiên - Lâm Thao - Phú Thọ",
        map: "https://maps.app.goo.gl/v1MmgS96DoGoM5s28"
      },
      time_start: {
        date: {
          lunar: {
            day: "02",
            month: "11",
            year: "2025"
          },
          day_of_week: "7",
          solar: {
            day: "21",
            month: "12",
            year: "2025"
          }
        },
        time: {
          hour: "10",
          minute: "00"
        }
      },
      finances: [{
        provider_name: "Techcombank",
        provider_number: "19030709044033",
        holder_name: "VU DOAN LONG"
      },],
      email: "vulongpt@gmail.com",
      phone: "0389926795",
      bg: '/assets/images/170e.jpg',
      bg_fb: '/assets/images/170e.jpg',
      us: "chúng tôi"
    },
    female: {
      name: "Nguyễn Thị Hà Trang",
      qr: "/assets/images/qr-female.jpg",
      parent: {
        father: "Nguyễn Văn Quang",
        mother: "Nguyễn Thị Vinh"
      },
      location: {
        text: "Nghĩa Hoàn - Tân Kỳ - Nghệ An",
        map: "https://maps.app.goo.gl/UcEuxBFc4VstxFz79"
      },
      time_start: {
        date: {
          lunar: {
            day: "02",
            month: "12",
            year: "2025"
          },
          day_of_week: "7",
          solar: {
            day: "21",
            month: "12",
            year: "2025"
          }
        },
        time: {
          hour: "10",
          minute: "00"
        }
      },
      finances: [],
      email: "nguyenthihatrang.na@gmail.com",
      phone: "0372667055",
      bg: '/assets/images/170e.jpg',
      bg_fb: '/assets/images/170e.jpg',
      us: "chúng tôi"
    },
    default: true
  }
};

module.exports = SeedDB;
