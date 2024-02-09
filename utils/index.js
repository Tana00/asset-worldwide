export const menuList = [
  {
    title: "Company",
    hasSubmenu: true,
    submenu: [
      { title: "About Us", href: "#about-us" },
      { title: "Why Us", href: "why-us" },
      {
        title: "Meet the Team",
        href: "#meet-the-team",
      },
    ],
  },
  {
    title: "Services",
    hasSubmenu: false,
    href: "/services",
  },
  {
    title: "Case Studies",
    hasSubmenu: false,
    href: "/case-studies",
  },
  {
    title: "FAQs",
    hasSubmenu: false,
    href: "/faqs",
  },
  {
    title: "Blogs",
    hasSubmenu: false,
    href: "/blogs",
  },
];

export const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let encoded = reader.result.toString().replace(/^data:(.*,)?/, "");
      if (encoded.length % 4 > 0) {
        encoded += "=".repeat(4 - (encoded.length % 4));
      }
      resolve(encoded);
    };
    reader.onerror = (error) => reject(error);
  });
