import { useEffect, useRef, useState } from "react";

export default function StairvilleWebsite() {
  const thumbnailsPerPage = 9;
  const [formStatus, setFormStatus] = useState({ state: "idle", message: "" });
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(0);
  const [thumbnailPage, setThumbnailPage] = useState(0);
  const [servicesVisible, setServicesVisible] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedGalleryItem(null);
        setSelectedGalleryImage(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const servicesSection = document.getElementById("services");

    if (!servicesSection) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setServicesVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(servicesSection);

    return () => observer.disconnect();
  }, []);

  const logoSvg =
    '<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="7in" height="9in" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 7000 9000" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css"><![CDATA[ .fil12 {fill:#BDBFC1} .fil9 {fill:#A9ABAE} .fil13 {fill:#727376} .fil0 {fill:#282829} .fil1 {fill:black} .fil4 {fill:url(#id1)} .fil3 {fill:url(#id2)} .fil2 {fill:url(#id3)} .fil7 {fill:url(#id4)} .fil10 {fill:url(#id5)} .fil11 {fill:url(#id6)} .fil8 {fill:url(#id7)} .fil6 {fill:url(#id8)} .fil5 {fill:url(#id9)} ]]></style><linearGradient id="id1" gradientUnits="userSpaceOnUse" x1="1332.95" y1="6870.96" x2="5681.57" y2="6870.96"><stop offset="0" style="stop-opacity:1; stop-color:#727376"/><stop offset="0.509804" style="stop-opacity:1; stop-color:#A9ABAE"/><stop offset="1" style="stop-opacity:1; stop-color:#727376"/></linearGradient><linearGradient id="id2" gradientUnits="userSpaceOnUse" x1="783.03" y1="7350.72" x2="6231.49" y2="7350.72"><stop offset="0" style="stop-opacity:1; stop-color:#727376"/><stop offset="0.501961" style="stop-opacity:1; stop-color:#A9ABAD"/><stop offset="1" style="stop-opacity:1; stop-color:#727376"/></linearGradient><linearGradient id="id3" gradientUnits="userSpaceOnUse" xlink:href="#id2" x1="324.3" y1="7901.73" x2="6690.22" y2="7901.73"></linearGradient><linearGradient id="id4" gradientUnits="userSpaceOnUse" x1="3511.01" y1="6394.56" x2="5616.08" y2="6394.56"><stop offset="0" style="stop-opacity:1; stop-color:#727376"/><stop offset="1" style="stop-opacity:1; stop-color:#A9ABAD"/></linearGradient><linearGradient id="id5" gradientUnits="userSpaceOnUse" x1="5299.25" y1="5732.88" x2="3332.04" y2="5870.75"><stop offset="0" style="stop-opacity:1; stop-color:#818081"/><stop offset="1" style="stop-opacity:1; stop-color:#FEFEFE"/></linearGradient><linearGradient id="id6" gradientUnits="userSpaceOnUse" x1="1812.24" y1="2103.51" x2="5474.62" y2="1561.16"><stop offset="0" style="stop-opacity:1; stop-color:#606062"/><stop offset="1" style="stop-opacity:1; stop-color:#FEFEFE"/></linearGradient><linearGradient id="id7" gradientUnits="userSpaceOnUse" xlink:href="#id4" x1="3509.21" y1="6395.23" x2="5616.08" y2="6395.23"></linearGradient><linearGradient id="id8" gradientUnits="userSpaceOnUse" x1="4289.59" y1="5558.06" x2="1682.77" y2="5841.06"><stop offset="0" style="stop-opacity:1; stop-color:#5E5E5E"/><stop offset="1" style="stop-opacity:1; stop-color:#969696"/></linearGradient><linearGradient id="id9" gradientUnits="userSpaceOnUse" xlink:href="#id6" x1="2635.39" y1="3316.3" x2="5963.99" y2="5498.21"></linearGradient></defs><g id="Layer_x0020_1"><g id="_2456872571728"><path class="fil1" d="M440.76 2609.53l-15.12 4418.5 -171.53 8.3 -4.11 347.5 3257.52 1471.85 0 0 0 0 3054.1 -1388.91 188.37 -72.44 -2.03 -345.56 -184.9 -5.55 15.14 -4449.38c6.52,-1913.95 -1626.67,-2505.77 -3217.54,-2445.39 -1476.27,56.03 -2925.56,623.79 -2919.92,2461.07z"/><polygon class="fil2" points="326.95,7115.36 3499.77,8219.58 6687.57,7115.36 6690.22,7317.31 3499.77,8688.09 3499.77,8688.09 3499.76,8688.09 324.3,7317.31 "/><polygon class="fil3" points="785.67,6822.2 3507.26,7497.91 6228.85,6822.2 6231.49,7024.15 3507.26,7879.24 3507.26,7879.24 3507.26,7879.24 783.03,7024.15 "/><polygon class="fil4" points="1332.95,6565.14 3507.26,6869.34 5681.57,6565.14 5681.57,6744.68 3507.26,7176.78 3507.26,7176.78 3507.26,7176.78 1332.95,6744.68 "/><path class="fil5" d="M5052.11 4706.55c-124.88,259.8 -545.09,501.7 -1032.14,633.03 -219.31,-136.92 -728.57,-432.78 -954.81,-542.64 -38.7,-18.8 -77.55,-41.26 -116.45,-66.8 -0.74,-0.49 -2.5,-1.01 -2.5,-1.01 -1.96,-1.3 -3.65,-3.06 -5.61,-4.37 -368.64,-246.09 -742.23,-765.94 -1053.56,-1071.81 0,0 -12.09,-1164.26 -12.09,-1164.26 0,-7.68 417.88,1.21 781.76,492.45 520.37,702.5 1476.74,782.7 2177.41,1259.37 88.87,60.46 193.54,167.34 228.9,284.46 1.8,5.96 3.26,12.41 4.69,18.41 12.85,53.98 10.42,109.03 -15.6,163.16z"/><path class="fil6" d="M2946.21 4729.13c0,0 1.8,0.88 4.83,2.65 26.56,15.54 147.83,100.03 -14.33,268.44 -155.16,161.12 -668.86,245.46 -990.82,399.62 -158.44,75.87 -270.45,213.36 -270.45,340.53 0,83.41 0.35,728.41 0.35,728.41l2136.81 182.59 256.99 -1340.53c43.3,-132.56 -45.85,-204.19 -159.08,-267.65 -244.5,-137.05 -805.73,-286.18 -964.3,-314.07z"/><polygon class="fil7" points="5615.33,6320.77 5615.33,6320.93 4415.22,6518.75 3511.01,6436.29 4530.19,6270.38 "/><polygon class="fil8" points="5615.33,6320.77 5615.33,6320.93 5616.08,6320.8 "/><polygon class="fil9" points="2245.27,6185.28 2245.27,6035.85 3621.04,6098.4 3624.65,6264.17 "/><polygon class="fil9" points="2666.47,5754.87 2666.47,5900.6 3596.75,5948.96 3600.48,5792.57 "/><polygon class="fil9" points="2990.99,5518.43 2990.99,5636.63 3696.05,5667.46 3706.48,5535.69 "/><polygon class="fil9" points="3243.45,5310.85 3243.45,5402.91 4106.92,5397.56 4105.82,5310.85 "/><path class="fil10" d="M3508.64 6438.98l0 -585.79c0,-258.98 212.56,-421.97 356.51,-469.04 610.35,-199.58 1179.84,-508.87 1197.87,-859.19 0,0 2.94,10.33 4.26,15.55 86.74,344.11 34.67,827.99 34.4,1178.15 -0.09,115.92 -57.56,292.23 -244.97,389.9 -169.4,88.28 -115.28,163.5 -150.93,169.96 0,0 -1197.14,160.45 -1197.14,160.45z"/><path class="fil11" d="M4707.13 1386.67l30.53 1244.45c-410.37,-221.38 -1268.17,-55.24 -1742.37,201.2 -617.75,334.06 -813.39,711.86 -1085.54,1036 0,0 -71.19,-178.26 -74.49,-270.59 -7.78,-217.82 -0.33,-532.42 -3.14,-842.52 -3.07,-338.28 64.43,-778.07 441.26,-1007.1 750.4,-456.07 2061.41,-465.46 2433.75,-361.45z"/><path class="fil12" d="M2946.21 4729.13c-69.87,-55.68 -549.45,-496.34 -574.01,-974.43 -48.38,-941.69 1644.95,-1454.37 2365.46,-1123.58 -751.02,-462.09 -2626.92,28.42 -2869.41,745.42 -193.42,571.9 532.2,1056.86 889.8,1255.86 112.19,62.43 188.16,96.72 188.16,96.72z"/><polygon class="fil9" points="4413.68,6501.52 4406.73,7088.83 4209.94,7058.42 4212.6,6706.6 1675.79,6468.79 1675.71,6312.33 "/><polygon class="fil13" points="5615.33,6320.92 5615.33,6809.91 4406.73,7088.83 4413.68,6501.52 "/></g></g></svg>';
  const logoSrc = `data:image/svg+xml;utf8,${encodeURIComponent(logoSvg)}`;

  const site = {
    company: "Stairville",
    phone: "916-450-1765",
    email: "stairville@yahoo.com",
    location: "Northern California",
    heroTitle: "Custom Staircases Built to Elevate Every Space",
    heroSubtitle:
      "Modern and traditional staircase design, construction, and remodeling across Northern California.",
    about:
      "Stairville specializes in custom staircases that combine craftsmanship, structure, and style. From brand-new builds to full remodels, we work with wood, glass, cable, and metal to create stair systems that fit both modern and traditional spaces.",
    services: [
      {
        title: "Custom Staircase Construction",
        text: "New staircase builds designed for residential and light commercial spaces."
      },
      {
        title: "Staircase Remodeling",
        text: "Transform outdated stair systems with updated layouts, finishes, and materials."
      },
      {
        title: "Modern & Traditional Designs",
        text: "From clean architectural lines to timeless craftsmanship, tailored to your space."
      },
      {
        title: "Material Specialties",
        text: "Wood, glass, cable, and metal solutions crafted for durability and appearance."
      }
    ],
    gallery: [
      {
        title: "Floating Staircase",
        description: "Contemporary floating stair builds with clean lines, open risers, and a light architectural feel.",
        image: "/images/floating-stairs-9-cleaned.png",
        images: [
          "/images/floating-stairs-1.jpg",
          "/images/floating-stairs-2.jpg",
          "/images/floating-stairs-3.jpg",
          "/images/floating-stairs-4.jpg",
          "/images/floating-stairs-5.jpg",
          "/images/floating-stairs.jpg",
          "/images/floating-stairs (2).jpg",
          "/images/floating-stairs (3).jpg",
          "/images/floating-stairs (4).jpg",
          "/images/Floating-stairs (5).jpg",
          "/images/floating-stairs (6).jpg",
          "/images/floating-stairs (7).jpg",
          "/images/floating-stairs (8).jpg",
          "/images/floating-stairs (9).jpg",
          "/images/floating-stairs (10).jpg",
          "/images/floating-stairs (11).jpg",
          "/images/floating-stiars.jpg"
        ]
      },
      {
        title: "Traditional Wood Staircase",
        description: "Traditional wood staircases with classic handrails, warm finishes, and timeless detailing.",
        image: "/images/Traditional Wood (60).jpg",
        coverClassName: "scale-[1.03] object-cover object-[center_78%]",
        images: [
          "/images/Traditional (2).jpg",
          "/images/Traditional (3).jpg",
          "/images/Traditional Wood (10).JPG",
          "/images/Traditional Wood (100).jpg",
          "/images/Traditional Wood (101).jpg",
          "/images/Traditional Wood (102).jpg",
          "/images/Traditional Wood (103).jpg",
          "/images/Traditional Wood (104).jpg",
          "/images/Traditional Wood (105).jpg",
          "/images/Traditional Wood (106).jpg",
          "/images/Traditional Wood (107).jpg",
          "/images/Traditional Wood (108).jpg",
          "/images/Traditional Wood (109).jpg",
          "/images/Traditional Wood (11).JPG",
          "/images/Traditional Wood (110).jpg",
          "/images/Traditional Wood (111).jpg",
          "/images/Traditional Wood (112).jpg",
          "/images/Traditional Wood (113).jpg",
          "/images/Traditional Wood (114).jpg",
          "/images/Traditional Wood (115).jpg",
          "/images/Traditional Wood (12).JPG",
          "/images/Traditional Wood (13).JPG",
          "/images/Traditional Wood (14).JPG",
          "/images/Traditional Wood (15).jpg",
          "/images/Traditional Wood (16).jpg",
          "/images/Traditional Wood (17).jpg",
          "/images/Traditional Wood (18).jpg",
          "/images/Traditional Wood (19).jpg",
          "/images/Traditional Wood (20).jpg",
          "/images/Traditional Wood (21).jpg",
          "/images/Traditional Wood (22).jpg",
          "/images/Traditional Wood (23).jpg",
          "/images/Traditional Wood (24).jpg",
          "/images/Traditional Wood (25).jpg",
          "/images/Traditional Wood (26).jpg",
          "/images/Traditional Wood (27).jpg",
          "/images/Traditional Wood (28).jpg",
          "/images/Traditional Wood (29).jpg",
          "/images/Traditional Wood (3).JPG",
          "/images/Traditional Wood (3).PNG",
          "/images/Traditional Wood (30).jpg",
          "/images/Traditional Wood (31).jpg",
          "/images/Traditional Wood (32).jpg",
          "/images/Traditional Wood (33).jpg",
          "/images/Traditional Wood (34).jpg",
          "/images/Traditional Wood (35).jpg",
          "/images/Traditional Wood (36).jpg",
          "/images/Traditional Wood (37).jpg",
          "/images/Traditional Wood (38).jpg",
          "/images/Traditional Wood (39).jpg",
          "/images/Traditional Wood (4).JPG",
          "/images/Traditional Wood (40).jpg",
          "/images/Traditional Wood (41).jpg",
          "/images/Traditional Wood (42).jpg",
          "/images/Traditional Wood (43).jpg",
          "/images/Traditional Wood (44).jpg",
          "/images/Traditional Wood (45).jpg",
          "/images/Traditional Wood (46).jpg",
          "/images/Traditional Wood (47).jpg",
          "/images/Traditional Wood (48).jpg",
          "/images/Traditional Wood (49).jpg",
          "/images/Traditional Wood (5).JPG",
          "/images/Traditional Wood (50).jpg",
          "/images/Traditional Wood (51).jpg",
          "/images/Traditional Wood (52).jpg",
          "/images/Traditional Wood (53).jpg",
          "/images/Traditional Wood (54).jpg",
          "/images/Traditional Wood (55).jpg",
          "/images/Traditional Wood (56).jpg",
          "/images/Traditional Wood (57).jpg",
          "/images/Traditional Wood (58).jpg",
          "/images/Traditional Wood (59).jpg",
          "/images/Traditional Wood (6).JPG",
          "/images/Traditional Wood (60).jpg",
          "/images/Traditional Wood (61).jpg",
          "/images/Traditional Wood (62).jpg",
          "/images/Traditional Wood (63).jpg",
          "/images/Traditional Wood (64).jpg",
          "/images/Traditional Wood (65).jpg",
          "/images/Traditional Wood (66).jpg",
          "/images/Traditional Wood (67).jpg",
          "/images/Traditional Wood (68).jpg",
          "/images/Traditional Wood (69).jpg",
          "/images/Traditional Wood (7).JPG",
          "/images/Traditional Wood (70).jpg",
          "/images/Traditional Wood (71).jpg",
          "/images/Traditional Wood (72).jpg",
          "/images/Traditional Wood (73).jpg",
          "/images/Traditional Wood (74).jpg",
          "/images/Traditional Wood (75).jpg",
          "/images/Traditional Wood (76).jpg",
          "/images/Traditional Wood (77).jpg",
          "/images/Traditional Wood (78).jpg",
          "/images/Traditional Wood (79).jpg",
          "/images/Traditional Wood (8).JPG",
          "/images/Traditional Wood (80).jpg",
          "/images/Traditional Wood (81).jpg",
          "/images/Traditional Wood (82).jpg",
          "/images/Traditional Wood (83).jpg",
          "/images/Traditional Wood (84).jpg",
          "/images/Traditional Wood (85).jpg",
          "/images/Traditional Wood (86).jpg",
          "/images/Traditional Wood (87).jpg",
          "/images/Traditional Wood (88).jpg",
          "/images/Traditional Wood (89).jpg",
          "/images/Traditional Wood (9).JPG",
          "/images/Traditional Wood (90).jpg",
          "/images/Traditional Wood (91).jpg",
          "/images/Traditional Wood (92).jpg",
          "/images/Traditional Wood (93).jpg",
          "/images/Traditional Wood (94).jpg",
          "/images/Traditional Wood (95).jpg",
          "/images/Traditional Wood (96).jpg",
          "/images/Traditional Wood (97).jpg",
          "/images/Traditional Wood (98).jpg",
          "/images/Traditional Wood (99).jpg",
          "/images/Traditional Wood.JPG",
          "/images/Traditional Wood.PNG",
          "/images/Traditional.JPG"
        ]
      },
      {
        title: "Glass Railing",
        description: "Glass railing installations that keep the staircase open, bright, and visually clean.",
        image: "/images/glass (16).jpg",
        images: [
          "/images/glass.jpg",
          "/images/glass (2).jpg",
          "/images/glass (3).jpg",
          "/images/glass (4).jpg",
          "/images/glass (5).jpg",
          "/images/glass (6).jpg",
          "/images/glass (7).jpg",
          "/images/glass (8).jpg",
          "/images/glass (9).jpg",
          "/images/glass (10).jpg",
          "/images/glass (11).jpg",
          "/images/glass (12).jpg",
          "/images/glass (14).jpg",
          "/images/glass (15).jpg",
          "/images/glass (16).jpg",
          "/images/glass (17).jpg",
          "/images/glass (18).jpg",
          "/images/glass (19).jpg",
          "/images/glass (20).jpg",
          "/images/glass (21).jpg",
          "/images/glass (22).jpg",
          "/images/glass (23).jpg",
          "/images/glass (24).jpg",
          "/images/glass (25).jpg",
          "/images/glass (26).jpg",
          "/images/glass (27).jpg",
          "/images/glass (28).jpg",
          "/images/glass (29).jpg"
        ]
      },
      {
        title: "Cable Railing",
        description: "Cable railing work that adds safety while keeping the staircase feeling open and modern.",
        image: "/images/cable railing.jpg",
        images: [
          "/images/cable railing.jpg",
          "/images/cable.jpg",
          "/images/cable.jpeg",
          "/images/Cable (2).jpg",
          "/images/cable (3).jpg",
          "/images/cable (4).jpg",
          "/images/cable (5).jpg",
          "/images/cable (6).jpg",
          "/images/Cable (7).jpg",
          "/images/cable (8).jpg",
          "/images/glass (13).jpg"
        ]
      },
      {
        title: "Modern Wood Staircase",
        description: "Modern wood staircase designs with clean geometry, strong lines, and refined detailing.",
        image: "/images/Modern Wood (102).jpg",
        images: [
          "/images/Modern Wood (10).jpg",
          "/images/Modern Wood (100).jpg",
          "/images/Modern Wood (101).jpg",
          "/images/Modern Wood (102).jpg",
          "/images/Modern Wood (103).jpg",
          "/images/Modern Wood (104).jpg",
          "/images/Modern Wood (105).jpg",
          "/images/Modern Wood (106).jpg",
          "/images/Modern Wood (107).jpg",
          "/images/Modern wood (108).jpg",
          "/images/Modern wood (109).jpg",
          "/images/Modern Wood (11).jpg",
          "/images/Modern Wood (110).jpg",
          "/images/Modern Wood (111).jpg",
          "/images/Modern Wood (112).jpg",
          "/images/Modern Wood (113).jpg",
          "/images/Modern Wood (114).jpg",
          "/images/Modern Wood (115).jpg",
          "/images/Modern Wood (116).jpg",
          "/images/Modern Wood (117).jpg",
          "/images/Modern Wood (118).jpg",
          "/images/Modern Wood (119).jpg",
          "/images/Modern Wood (12).jpg",
          "/images/Modern Wood (120).jpg",
          "/images/Modern Wood (121).jpg",
          "/images/Modern Wood (122).jpg",
          "/images/Modern Wood (123).jpg",
          "/images/Modern Wood (124).jpg",
          "/images/Modern Wood (125).jpg",
          "/images/Modern Wood (126).jpg",
          "/images/Modern Wood (127).jpg",
          "/images/Modern Wood (13).jpg",
          "/images/Modern Wood (14).jpg",
          "/images/Modern Wood (15).jpg",
          "/images/Modern Wood (16).jpg",
          "/images/Modern Wood (17).jpg",
          "/images/Modern Wood (18).jpg",
          "/images/Modern Wood (19).jpg",
          "/images/Modern Wood (2).jpg",
          "/images/Modern Wood (20).jpg",
          "/images/Modern Wood (21).jpg",
          "/images/Modern Wood (22).jpg",
          "/images/Modern Wood (23).jpg",
          "/images/Modern Wood (24).jpg",
          "/images/Modern Wood (25).jpg",
          "/images/Modern Wood (26).jpg",
          "/images/Modern Wood (27).jpg",
          "/images/Modern Wood (28).jpg",
          "/images/Modern Wood (29).jpg",
          "/images/Modern Wood (30).jpg",
          "/images/Modern Wood (31).jpg",
          "/images/Modern Wood (32).jpg",
          "/images/Modern Wood (33).jpg",
          "/images/Modern Wood (34).jpg",
          "/images/Modern Wood (35).jpg",
          "/images/Modern Wood (36).jpg",
          "/images/Modern Wood (37).jpg",
          "/images/Modern wood (38).jpg",
          "/images/Modern Wood (39).jpg",
          "/images/Modern Wood (4).jpg",
          "/images/Modern Wood (40).jpg",
          "/images/Modern Wood (41).jpg",
          "/images/Modern Wood (42).jpg",
          "/images/Modern Wood (43).jpg",
          "/images/Modern Wood (44).jpg",
          "/images/Modern Wood (45).jpg",
          "/images/Modern Wood (46).jpg",
          "/images/Modern Wood (47).jpg",
          "/images/Modern Wood (48).jpg",
          "/images/Modern Wood (49).jpg",
          "/images/Modern Wood (5).JPG",
          "/images/Modern Wood (50).jpg",
          "/images/Modern Wood (51).jpg",
          "/images/Modern Wood (52).jpg",
          "/images/Modern Wood (53).jpg",
          "/images/Modern Wood (54).jpg",
          "/images/Modern Wood (55).jpg",
          "/images/Modern Wood (56).jpg",
          "/images/Modern Wood (57).jpg",
          "/images/Modern wood (58).jpg",
          "/images/Modern Wood (59).jpg",
          "/images/Modern Wood (6).JPG",
          "/images/Modern Wood (60).jpg",
          "/images/Modern Wood (61).jpg",
          "/images/Modern Wood (62).jpg",
          "/images/Modern Wood (63).jpg",
          "/images/Modern Wood (64).jpg",
          "/images/Modern Wood (65).jpg",
          "/images/Modern Wood (66).jpg",
          "/images/Modern Wood (67).jpg",
          "/images/Modern Wood (68).jpg",
          "/images/Modern Wood (69).jpg",
          "/images/Modern Wood (7).JPG",
          "/images/Modern Wood (70).jpg",
          "/images/Modern Wood (71).jpg",
          "/images/Modern Wood (72).jpg",
          "/images/Modern Wood (73).jpg",
          "/images/Modern Wood (74).jpg",
          "/images/Modern Wood (75).jpg",
          "/images/Modern Wood (76).jpg",
          "/images/Modern Wood (77).jpg",
          "/images/Modern Wood (78).jpg",
          "/images/Modern Wood (79).jpg",
          "/images/Modern Wood (8).JPG",
          "/images/Modern Wood (80).jpg",
          "/images/Modern Wood (81).jpg",
          "/images/Modern Wood (82).jpg",
          "/images/Modern Wood (83).jpg",
          "/images/Modern Wood (84).jpg",
          "/images/Modern Wood (85).jpg",
          "/images/Modern Wood (86).jpg",
          "/images/Modern Wood (87).jpg",
          "/images/Modern Wood (88).jpg",
          "/images/Modern Wood (89).jpg",
          "/images/Modern Wood (9).jpg",
          "/images/Modern wood (90).jpg",
          "/images/Modern Wood (91).jpg",
          "/images/Modern Wood (92).jpg",
          "/images/Modern Wood (93).jpg",
          "/images/Modern Wood (94).jpg",
          "/images/Modern Wood (95).jpg",
          "/images/Modern Wood (96).jpg",
          "/images/Modern Wood (97).jpg",
          "/images/Modern Wood (98).jpg",
          "/images/Modern Wood (99).jpg",
          "/images/Modern Wood.jpg",
          "/images/IMG_9525.PNG"
        ]
      },
      {
        title: "Treads",
        description: "Close-up craftsmanship highlighting treads, finish work, and detail-driven installations.",
        image: "/images/treads-2.jpg",
        images: [
          "/images/treads-1.jpg",
          "/images/treads-2.jpg",
          "/images/treads.jpg",
          "/images/treads (2).jpg",
          "/images/treads (3).jpg",
          "/images/treads (4).jpg",
          "/images/treads (5).jpg",
          "/images/treads (6).jpg",
          "/images/treads (7).jpg",
          "/images/treads (8).jpg",
          "/images/treads (9).jpg",
          "/images/treads (10).jpg",
          "/images/treads (11).jpg",
          "/images/treads (12).jpg",
          "/images/treads (13).jpg",
          "/images/treads (14).jpg",
          "/images/treads (15).jpg",
          "/images/treads (16).jpg",
          "/images/treads (17).jpg",
          "/images/treads (18).jpg",
          "/images/treads (19).jpg"
        ]
      }
    ]
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" }
  ];

  const showPreviousGalleryImage = () => {
    if (!selectedGalleryItem) {
      return;
    }

    setSelectedGalleryImage((prev) => {
      const nextIndex = prev === 0 ? selectedGalleryItem.images.length - 1 : prev - 1;
      setThumbnailPage(Math.floor(nextIndex / thumbnailsPerPage));
      return nextIndex;
    });
  };

  const showNextGalleryImage = () => {
    if (!selectedGalleryItem) {
      return;
    }

    setSelectedGalleryImage((prev) => {
      const nextIndex = prev === selectedGalleryItem.images.length - 1 ? 0 : prev + 1;
      setThumbnailPage(Math.floor(nextIndex / thumbnailsPerPage));
      return nextIndex;
    });
  };

  const totalThumbnailPages = selectedGalleryItem
    ? Math.ceil(selectedGalleryItem.images.length / thumbnailsPerPage)
    : 0;

  const visibleThumbnails = selectedGalleryItem
    ? selectedGalleryItem.images.slice(
        thumbnailPage * thumbnailsPerPage,
        thumbnailPage * thumbnailsPerPage + thumbnailsPerPage
      )
    : [];

  const selectGalleryImage = (index) => {
    setSelectedGalleryImage(index);
    setThumbnailPage(Math.floor(index / thumbnailsPerPage));
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt="Stairville Logo"
              className="h-20 w-auto object-contain drop-shadow-[0_6px_24px_rgba(0,0,0,0.35)]"
            />
            <div>
              <div className="text-3xl font-semibold tracking-wide">{site.company}</div>
              <div className="text-lg uppercase tracking-[0.35em] text-neutral-400">
                Custom Staircases
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xl text-neutral-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-2xl border border-amber-300/30 bg-amber-300/10 px-8 py-4 text-xl font-medium text-amber-200 transition hover:bg-amber-300/20"
          >
            Request a Quote
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden scroll-mt-36">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.14),transparent_30%),radial-gradient(circle_at_left,rgba(255,255,255,0.08),transparent_25%)]" />
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div className="relative z-10 flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300">
                Serving {site.location}
              </div>
              <h1 className="max-w-2xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
                {site.heroTitle}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
                {site.heroSubtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#gallery"
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:opacity-90"
                >
                  View Projects
                </a>
                <a
                  href={`tel:${site.phone.replace(/[^\d]/g, "")}`}
                  className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
                >
                  Call {site.phone}
                </a>
              </div>
            </div>

            <div className="relative z-10">
              <div className="grid gap-4 sm:grid-cols-2">
                <img
                  src="/images/floating-stairs (6).jpg"
                  alt="Modern floating staircase interior"
                  className="h-72 w-full scale-125 rounded-3xl object-cover object-center shadow-2xl shadow-black/30 sm:h-80"
                />
                <img
                  src="/images/traditional-wood-80-cleaned.png"
                  alt="Glass and wood staircase project"
                  className="mt-10 h-72 w-full scale-125 rounded-3xl object-cover object-center shadow-2xl shadow-black/30 sm:h-80"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl scroll-mt-36 px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-300">About Stairville</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Craftsmanship built for lasting impact.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">{site.about}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold">Why homeowners choose us</h3>
              <div className="mt-6 space-y-5 text-neutral-300">
                <div>
                  <div className="font-medium text-amber-300">Specialized focus</div>
                  <p className="mt-1">
                    We focus on staircases, not general work spread across everything.
                  </p>
                </div>
                <div>
                  <div className="font-medium text-amber-300">Design flexibility</div>
                  <p className="mt-1">Modern, traditional, and hybrid styles tailored to the space.</p>
                </div>
                <div>
                  <div className="font-medium text-amber-300">Material expertise</div>
                  <p className="mt-1">
                    Wood, glass, cable, and metal options with a clean finished look.
                  </p>
                </div>
                <div>
                  <div className="font-medium text-amber-300">Customer-first approach</div>
                  <p className="mt-1">
                    We accommodate any inconvenience and take the time to help you find the
                    best solution for your home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl scroll-mt-36 px-6 py-4 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Services</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Stair solutions for new builds and remodels.
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {site.services.map((service, index) => (
              <div
                key={service.title}
                className={`flex min-h-[320px] flex-col rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-xl shadow-black/10 transition-all duration-[1400ms] ease-out ${
                  servicesVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: `${index * 450}ms` }}
              >
                <h3 className="flex min-h-[7rem] items-center justify-center text-2xl font-semibold leading-tight md:text-[1.75rem]">
                  {service.title}
                </h3>
                <p className="mx-auto mt-4 max-w-[16rem] text-base leading-8 text-neutral-300">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-7xl scroll-mt-36 px-6 py-20 lg:px-8">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Gallery</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Featured staircase styles
            </h2>
            <p className="mt-4 max-w-2xl text-neutral-300">
              Browse recent Stairville work by style, material, and finish detail.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {site.gallery.map((item) => (
              <button
                key={item.title}
                type="button"
                onClick={() => {
                  setSelectedGalleryItem(item);
                  setSelectedGalleryImage(0);
                  setThumbnailPage(0);
                }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left transition hover:-translate-y-1 hover:border-amber-300/30 hover:bg-white/[0.07]"
              >
                <div className="relative h-80 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`absolute inset-0 h-full w-full ${item.coverClassName ?? "object-cover"}`}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neutral-400">
                      View Gallery
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-neutral-300">{item.description}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {selectedGalleryItem && (
          <div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm"
            onClick={() => {
              setSelectedGalleryItem(null);
              setSelectedGalleryImage(0);
              setThumbnailPage(0);
            }}
          >
            <div
              className="relative w-full max-w-6xl rounded-[2rem] border border-white/10 bg-neutral-950 shadow-2xl shadow-black/50"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => {
                  setSelectedGalleryItem(null);
                  setSelectedGalleryImage(0);
                  setThumbnailPage(0);
                }}
                className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-black/40 px-3 py-2 text-sm text-white transition hover:bg-black/60"
              >
                Close
              </button>

              <div className="grid gap-0 lg:grid-cols-[1.3fr_0.7fr]">
                <div className="border-b border-white/10 bg-black/30 lg:border-b-0 lg:border-r">
                  <div className="flex h-[420px] items-center justify-center overflow-hidden rounded-t-[2rem] p-4 lg:h-[620px] lg:rounded-l-[2rem] lg:rounded-tr-none lg:p-6">
                    <img
                      src={selectedGalleryItem.images[selectedGalleryImage]}
                      alt={selectedGalleryItem.title}
                      className="h-full w-full touch-pan-y object-contain"
                    />
                  </div>
                </div>

                <div className="flex flex-col p-6 md:p-8">
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-300">
                    Project Gallery
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                    {selectedGalleryItem.title}
                  </h3>
                  <p className="mt-4 text-neutral-300">{selectedGalleryItem.description}</p>

                  <div className="mt-6">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                        Images {thumbnailPage * thumbnailsPerPage + 1}-
                        {Math.min(
                          thumbnailPage * thumbnailsPerPage + thumbnailsPerPage,
                          selectedGalleryItem.images.length
                        )}{" "}
                        of {selectedGalleryItem.images.length}
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {visibleThumbnails.map((image, index) => {
                        const actualIndex = thumbnailPage * thumbnailsPerPage + index;

                        return (
                        <button
                          key={image}
                          type="button"
                          onClick={() => selectGalleryImage(actualIndex)}
                          className={`overflow-hidden rounded-2xl border ${
                            selectedGalleryImage === actualIndex
                              ? "border-amber-300"
                              : "border-white/10"
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${selectedGalleryItem.title} ${actualIndex + 1}`}
                            className="h-24 w-full object-cover"
                          />
                        </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button
                      type="button"
                      onClick={showPreviousGalleryImage}
                      className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/5"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={showNextGalleryImage}
                      className="rounded-2xl bg-amber-300 px-4 py-3 text-sm font-medium text-neutral-950 transition hover:bg-amber-200"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <section id="contact" className="mx-auto max-w-7xl scroll-mt-36 px-6 pb-24 lg:px-8">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8 md:grid-cols-[1fr_0.9fr] md:p-10">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Let&apos;s talk about your staircase project.
              </h2>
              <p className="mt-4 max-w-xl text-neutral-300">
                Reach out for new construction, remodeling, or material upgrades. Stairville
                serves clients throughout Northern California.
              </p>
              <div className="mt-6">
                <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                  Prefer email?
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 inline-block text-lg text-amber-200 transition hover:text-amber-100"
                >
                  {site.email}
                </a>
                <div className="mt-3">
                  <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                    Prefer calling?
                  </p>
                  <a
                    href={`tel:${site.phone.replace(/[^\d]/g, "")}`}
                    className="mt-2 inline-block text-lg text-amber-200 transition hover:text-amber-100"
                  >
                    {site.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="grid gap-4 text-sm">
              <form
                onSubmit={async (event) => {
                  event.preventDefault();
                  setFormStatus({ state: "submitting", message: "Sending your request..." });

                  const form = event.currentTarget;
                  const formData = new FormData(form);

                  try {
                    const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
                      method: "POST",
                      headers: {
                        Accept: "application/json"
                      },
                      body: formData
                    });

                    const result = await response.json();

                    if (response.ok && result.success !== false) {
                      setFormStatus({
                        state: "success",
                        message:
                          "Your request was sent successfully. We will get back to you soon."
                      });
                      form.reset();
                    } else {
                      setFormStatus({
                        state: "error",
                        message:
                          "There was a problem sending your request. Please try again or call us directly."
                      });
                    }
                  } catch {
                    setFormStatus({
                      state: "error",
                      message:
                        "There was a problem sending your request. Please try again or call us directly."
                    });
                  }
                }}
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value="New Stairville quote request" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_url" value="https://stairville.com/contact" />

                <div>
                  <label className="mb-1 block text-neutral-400">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/20 p-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-300"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-neutral-400">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/20 p-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-300"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-neutral-400">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/20 p-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-300"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-neutral-400">Location / Service Area</label>
                  <input
                    type="text"
                    name="location"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/20 p-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-300"
                    placeholder="City or Area"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-neutral-400">Description of Request</label>
                  <textarea
                    name="description"
                    rows="4"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/20 p-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-300"
                    placeholder="Tell us about your staircase project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus.state === "submitting"}
                  className="w-full rounded-2xl bg-amber-300 px-6 py-3 font-semibold text-neutral-900 transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {formStatus.state === "submitting" ? "Sending..." : "Submit Request"}
                </button>

                <p
                  className={`text-sm ${
                    formStatus.state === "success"
                      ? "text-green-300"
                      : formStatus.state === "error"
                        ? "text-red-300"
                        : "text-neutral-500"
                  }`}
                >
                  {formStatus.message || "Fill out the form and submit your request."}
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
