// นำเข้า useState hook สำหรับจัดการ state และไอคอน Menu / X จาก lucide-react
import { useState } from "react";
import { Menu, X } from "lucide-react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  // สร้าง state ชื่อ menuOpen สำหรับเก็บสถานะว่าเมนูเปิดอยู่หรือไม่ (เริ่มต้นเป็น false)
  const [menuOpen, setMenuOpen] = useState(false);

  // ฟังก์ชัน toggleMenu ใช้สำหรับสลับค่า true/false ของ menuOpen
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="border-b">
      {/* แถบบนสุด มีไอคอนโซเชียล โลโก้ และช่องว่างด้านขวา */}
      <div className="flex justify-between items-center px-4 py-2">
        {/* ไอคอนโซเชียล */}
        <div className="flex space-x-3">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        {/* โลโก้ตรงกลาง */}
        <h1 className="text-2xl font-light tracking-tight">
          <span className="font-bold">MEN</span>DETAILS
        </h1>

        {/* ช่องว่างด้านขวาเพื่อให้โลโก้อยู่ตรงกลาง (หรือใส่ปุ่ม search ก็ได้) */}
        <div className="w-6"></div>
      </div>

      {/* แถบเมนูหลักใต้โลโก้ */}
      <div className="border-t border-gray-300">
        <div className="flex items-center justify-between px-4 py-2">
          {/* ปุ่มแฮมเบอร์เกอร์แสดงเฉพาะบนมือถือ (md:hidden) */}
          <button onClick={toggleMenu} className="md:hidden">
            {/* แสดง X เมื่อเปิดเมนู, แสดงเมนูเมื่อยังไม่เปิด */}
            {menuOpen ? <X /> : <Menu />}
          </button>

          {/* เมนูหลัก */}
          <nav
            className={`flex-1 md:flex justify-center ${
              menuOpen ? "block" : "hidden"
            } md:block`}
          >
            {/* รายการเมนู - แสดงแนวตั้งในมือถือ, แนวนอนในเดสก์ท็อป */}
            <ul className="flex flex-col md:flex-row gap-4 text-sm font-bold text-black uppercase">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Style</a>
              </li>{" "}
              <li>
                <a href="#">Woman</a>
              </li>
              <li>
                <a href="#">Life</a>
              </li>
              <li>
                <a href="#">Watch</a>
              </li>
              <li>
                <a href="#">Auto</a>
              </li>
              <li>
                <a href="#">Gadget</a>
              </li>
              <li>
                <a href="#">Money</a>
              </li>
              <li>
                <a href="#">VDO</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>

          {/* ปุ่มค้นหา แสดงเฉพาะบนหน้าจอขนาดกลางขึ้นไป */}
          <button className="text-black hidden md:block">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
