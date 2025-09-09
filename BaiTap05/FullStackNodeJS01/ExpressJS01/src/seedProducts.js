import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/product.js";

dotenv.config();

// Kết nối DB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Kết nối MongoDB thành công"))
.catch((err) => console.error("❌ Lỗi kết nối MongoDB:", err));

const seedProducts = async () => {
  try {
    await Product.deleteMany(); // Xóa dữ liệu cũ

    const sampleProducts = [
      // --- Điện thoại ---
      {
        name: "iPhone 15 Pro",
        price: 30000000,
        category: "Điện thoại",
        description: "iPhone 15 Pro chính hãng Apple",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max-512gb_2_1_1.png",
        discount: 5,
        views: 1200,
        stock: 50,
        brand: "Apple"
      },
      {
        name: "Samsung Galaxy S23",
        price: 25000000,
        category: "Điện thoại",
        description: "Samsung Galaxy S23 chính hãng",
        image: "https://cdn.tgdd.vn/Products/Images/42/264060/samsung-galaxy-s23-600x600.jpg",
        discount: 10,
        views: 950,
        stock: 40,
        brand: "Samsung"
      },
      {
        name: "Xiaomi 13 Ultra",
        price: 18000000,
        category: "Điện thoại",
        description: "Điện thoại Xiaomi cao cấp",
        image: "https://cdn2.cellphones.com.vn/x/media/catalog/product/x/i/xiaomi-13-ultra_2__1.jpg",
        discount: 8,
        views: 700,
        stock: 30,
        brand: "Xiaomi"
      },
      {
        name: "Oppo Find X6 Pro",
        price: 22000000,
        category: "Điện thoại",
        description: "Oppo flagship camera mạnh",
        image: "https://cdn.tgdd.vn/Products/Images/42/297050/oppo-find-x6-pro-1-600x600.jpg",
        discount: 12,
        views: 680,
        stock: 35,
        brand: "Oppo"
      },
      {
        name: "Google Pixel 7 Pro",
        price: 21000000,
        category: "Điện thoại",
        description: "Google Pixel 7 Pro chụp ảnh cực nét",
        image: "https://pixelstore.vn/uploads/source/google-pixel/px-7pro/google-pixel-7-pro-chatmobile-(2).jpg",
        discount: 7,
        views: 500,
        stock: 25,
        brand: "Google"
      },
      {
        name: "Sony Xperia 1 V",
        price: 23000000,
        category: "Điện thoại",
        description: "Sony Xperia 1 V màn hình 4K độc đáo",
        image: "https://product.hstatic.net/1000370129/product/xperia-1-v-mark-5-trang_0bd74a402a6646f2a72d0c7519a13846_master_2423e0bf5fac4163a99e0316976dc10c.png",
        discount: 9,
        views: 400,
        stock: 20,
        brand: "Sony"
      },
      {
        name: "Vivo X90 Pro",
        price: 20000000,
        category: "Điện thoại",
        description: "Vivo X90 Pro với camera Zeiss",
        image: "https://cdn2.cellphones.com.vn/x/media/catalog/product/v/i/vivo-x90-pro.png",
        discount: 11,
        views: 450,
        stock: 28,
        brand: "Vivo"
      },
      {
        name: "Realme GT Neo 5",
        price: 15000000,
        category: "Điện thoại",
        description: "Realme GT Neo 5 sạc nhanh 240W",
        image: "https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/154575/Originals/realme-gt-neo-5-5.jpg",
        discount: 15,
        views: 600,
        stock: 45,
        brand: "Realme"
      },

      // --- Laptop ---
      {
        name: "MacBook Air M2",
        price: 35000000,
        category: "Laptop",
        description: "MacBook Air chip M2",
        image: "https://cdn2.fptshop.com.vn/unsafe/macbook_air_13_m2_midnight_1_35053fbcf9.png",
        discount: 5,
        views: 1500,
        stock: 60,
        brand: "Apple"
      },
      {
        name: "Dell XPS 13",
        price: 28000000,
        category: "Laptop",
        description: "Dell XPS 13 cao cấp",
        image: "https://cdn.tgdd.vn/Products/Images/44/327906/dell-xps-13-9340-ultra-5-xpsu5934w1-1-750x500.jpg",
        discount: 7,
        views: 1000,
        stock: 35,
        brand: "Dell"
      },
      {
        name: "HP Spectre x360",
        price: 26000000,
        category: "Laptop",
        description: "Laptop HP 2-in-1 cao cấp",
        image: "https://gamalaptop.vn/wp-content/uploads/2021/07/HP-Spectre-x360-15-01.jpg",
        discount: 9,
        views: 800,
        stock: 30,
        brand: "HP"
      },
      {
        name: "Asus ROG Zephyrus G14",
        price: 32000000,
        category: "Laptop",
        description: "Laptop gaming gọn nhẹ",
        image: "https://product.hstatic.net/200000837185/product/50871_rog_zephyrus_g14_23ecdf926b6a46fa887a95de8b1d409f_grande_5361640af98943f59d5b1af718d6a65a_grande.png",
        discount: 10,
        views: 900,
        stock: 25,
        brand: "Asus"
      },
      {
        name: "Lenovo ThinkPad X1 Carbon",
        price: 30000000,
        category: "Laptop",
        description: "Laptop doanh nhân siêu bền",
        image: "https://cdn.tgdd.vn/Products/Images/44/299453/lenovo-thinkpad-x1-carbon-600x600.jpg",
        discount: 6,
        views: 700,
        stock: 20,
        brand: "Lenovo"
      },
      {
        name: "MSI Stealth 15M",
        price: 27000000,
        category: "Laptop",
        description: "Laptop gaming mỏng nhẹ MSI",
        image: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/m/s/msi-stealth-15m.png",
        discount: 12,
        views: 850,
        stock: 22,
        brand: "MSI"
      },
      {
        name: "Acer Swift X",
        price: 24000000,
        category: "Laptop",
        description: "Laptop sáng tạo nội dung Acer",
        image: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/a/c/acer-swift-x.png",
        discount: 15,
        views: 620,
        stock: 28,
        brand: "Acer"
      },
      {
        name: "Razer Blade 14",
        price: 40000000,
        category: "Laptop",
        description: "Laptop gaming siêu cao cấp",
        image: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/r/a/razer-blade-14.png",
        discount: 10,
        views: 500,
        stock: 15,
        brand: "Razer"
      },

      // --- Tablet ---
      {
        name: "iPad Pro M2",
        price: 28000000,
        category: "Tablet",
        description: "iPad Pro 12.9 inch M2",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/ipad-pro-2022-11-inch-m2.png",
        discount: 5,
        views: 1200,
        stock: 45,
        brand: "Apple"
      },
      {
        name: "Samsung Galaxy Tab S9 Ultra",
        price: 24000000,
        category: "Tablet",
        description: "Tablet màn hình lớn, bút S-Pen",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ss-tab-s9-ultra_1_.png",
        discount: 8,
        views: 900,
        stock: 30,
        brand: "Samsung"
      },
      {
        name: "Xiaomi Pad 6 Pro",
        price: 12000000,
        category: "Tablet",
        description: "Tablet Xiaomi giá rẻ cấu hình mạnh",
        image: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/x/i/xiaomi-pad-6.png",
        discount: 12,
        views: 750,
        stock: 40,
        brand: "Xiaomi"
      },
      {
        name: "Lenovo Tab P12 Pro",
        price: 15000000,
        category: "Tablet",
        description: "Tablet Lenovo màn AMOLED",
        image: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/l/e/lenovo-tab-p12-pro.png",
        discount: 10,
        views: 600,
        stock: 25,
        brand: "Lenovo"
      },
      {
        name: "Huawei MatePad Pro",
        price: 17000000,
        category: "Tablet",
        description: "Huawei MatePad Pro hỗ trợ bút",
        image: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/h/u/huawei-matepad-pro.png",
        discount: 9,
        views: 550,
        stock: 20,
        brand: "Huawei"
      },
      {
        name: "Realme Pad X",
        price: 8000000,
        category: "Tablet",
        description: "Tablet giá rẻ của Realme",
        image: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/r/e/realme-pad-x.png",
        discount: 15,
        views: 400,
        stock: 30,
        brand: "Realme"
      },
      {
        name: "Microsoft Surface Pro 9",
        price: 30000000,
        category: "Tablet",
        description: "Surface Pro 9 2-in-1 của Microsoft",
        image: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/s/u/surface-pro-9.png",
        discount: 7,
        views: 480,
        stock: 18,
        brand: "Microsoft"
      },
      {
        name: "Asus ZenPad 10",
        price: 10000000,
        category: "Tablet",
        description: "Asus ZenPad 10 giá tốt",
        image: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/a/s/asus-zenpad-10.png",
        discount: 10,
        views: 420,
        stock: 22,
        brand: "Asus"
      },

      // --- Phụ kiện ---
      {
        name: "AirPods Pro 2",
        price: 5500000,
        category: "Phụ kiện",
        description: "Tai nghe không dây Apple",
        image: "https://cdn2.fptshop.com.vn/unsafe/564x0/filters:quality(80)/Uploads/images/2015/Tin-Tuc/05/02/05-tai-nghe-airpods-pro-2023-usb-c-02.jpg",
        discount: 5,
        views: 2000,
        stock: 80,
        brand: "Apple"
      },
      {
        name: "Logitech MX Master 3S",
        price: 2500000,
        category: "Phụ kiện",
        description: "Chuột không dây cao cấp",
        image: "https://cdn2.fptshop.com.vn/unsafe/564x0/filters:quality(80)/Uploads/images/2015/chuot-bluetooth-logitech-mx-master-3s-1.jpg",
        discount: 10,
        views: 1300,
        stock: 60,
        brand: "Logitech"
      },
      {
        name: "Bàn phím Keychron K2",
        price: 2200000,
        category: "Phụ kiện",
        description: "Bàn phím cơ bluetooth",
        image: "https://owlgaming.vn/wp-content/uploads/2021/01/Keychron-K2-V2-vo-nhua-sw-blue.jpg",
        discount: 12,
        views: 950,
        stock: 40,
        brand: "Keychron"
      },
      {
        name: "Tai nghe Sony WH-1000XM5",
        price: 8000000,
        category: "Phụ kiện",
        description: "Tai nghe chống ồn Sony cao cấp",
        image: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/w/h/wh1000xm5.png",
        discount: 8,
        views: 700,
        stock: 30,
        brand: "Sony"
      },
      {
        name: "Loa JBL Charge 5",
        price: 4500000,
        category: "Phụ kiện",
        description: "Loa bluetooth JBL Charge 5",
        image: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/j/b/jbl-charge-5.png",
        discount: 10,
        views: 620,
        stock: 35,
        brand: "JBL"
      },
      {
        name: "Cáp Anker PowerLine III",
        price: 350000,
        category: "Phụ kiện",
        description: "Cáp sạc nhanh bền bỉ",
        image: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/a/n/anker-powerline-3.png",
        discount: 15,
        views: 400,
        stock: 100,
        brand: "Anker"
      },
      {
        name: "Sạc nhanh Baseus 65W",
        price: 600000,
        category: "Phụ kiện",
        description: "Củ sạc nhanh Baseus 65W GaN",
        image: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/b/a/baseus-65w.png",
        discount: 20,
        views: 500,
        stock: 70,
        brand: "Baseus"
      },
      {
        name: "Thẻ nhớ Sandisk 128GB",
        price: 500000,
        category: "Phụ kiện",
        description: "Thẻ nhớ microSD Sandisk",
        image: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/s/a/sandisk-128gb.png",
        discount: 18,
        views: 450,
        stock: 90,
        brand: "Sandisk"
      }
    ];


    await Product.insertMany(sampleProducts);

    console.log(`🌱 Đã thêm ${sampleProducts.length} sản phẩm mẫu thành công`);
    process.exit();
  } catch (error) {
    console.error("❌ Lỗi seed dữ liệu:", error);
    process.exit(1);
  }
};

seedProducts();
