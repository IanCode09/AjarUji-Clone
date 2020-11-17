import Image1 from '../assets/images/monthly.png'
import Image2 from '../assets/images/yearly.png'
import Image3 from '../assets/images/group1.png'

const subscribes = [
    {
        "category": "Bulanan",
        "description": "Akses tak terhingga dengan berlangganan bulanan di Ajar Uji.",
        "price": "39.000",
        "duration": "Bulan",
        "isDiscount": false,
        "img": Image1
    },

    {
        "category": "Tahunan",
        "description": "Penawaran terbaik dengan berlangganan selama setahun",
        "price": "29.000",
        "duration": "Bulan",
        "isDiscount": true,
        "img": Image2
    },

    {
        "category": "Grup",
        "description": "Belajar bersama dengan Ajar Uji bersama teman lebih menarik",
        "price": "550.000",
        "duration": "Tahun",
        "isDiscount": false,
        "img": Image3
    }
]

export default subscribes