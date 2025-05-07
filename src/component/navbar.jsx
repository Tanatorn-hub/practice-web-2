import React, { useState } from "react";

const navbar = () => {
  // สร้าง state ชื่อ menuOpen สำหรับเก็บสถานะว่าเมนูเปิดอยู่หรือไม่ (เริ่มต้นเป็น false)
  const [menuOpen, setMenuOpen] = useState(false);

  // ฟังก์ชัน toggleMenu ใช้สำหรับสลับค่า true/false ของ menuOpen
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className="border-b">
        <div className="flex ">
            {/* ไอคอน social */}
            <div>

            </div>
        </div>
      </header>
    </>
  );
};

export default navbar;
