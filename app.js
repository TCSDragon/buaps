const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRt6G5mWeciGzzHmut-zMiiihB59U33X4XUoDa-ujYmF_wkvrG_Tkr7WX8qPcnSSiHk_ZQuV802PIsC/pub?gid=0&single=true&output=csv";

const SITE_TEXT = {
  en: {
    navHome: "Home",
    navInventory: "Inventory",
    navContact: "Contact",
    navTowing: "Towing",
    towingTitle: "Towing Services",
    towingSubtitle: "Fast, reliable towing when you need it most",
    callNow: "Call Now",
    callDealer: "Call Dealer",
    viewDetails: "View Details",
    backToInventory: "Back to Inventory",
    emailAboutCar: "Email About This Car",
    loadingInventory: "Loading inventory...",
    loadingFeatured: "Loading featured vehicles...",
    loadingVehicle: "Loading vehicle details...",
    inventoryTitle: "Current Inventory",
    inventorySubtitle: "Browse our available vehicles below",
    featuredTitle: "Featured Vehicles",
    noFeatured: "No vehicles are currently marked as featured in the spreadsheet.",
    noAvailable: "No vehicles are currently marked as Available in the spreadsheet.",
    noFeaturedSelected: "No featured vehicles selected.",
    noAvailableFound: "No available vehicles found.",
    vehicleNotSpecified: "No vehicle was specified.",
    vehicleOpenExample: "Open this page using a URL like:",
    spreadsheetNotConfigured: "Spreadsheet URL not configured yet.",
    failedLoadFeatured: "Failed to load featured vehicles.",
    failedLoadInventory: "Failed to load the spreadsheet data.",
    failedLoadVehicle: "Failed to load vehicle details.",
    checkThat: "Check that:",
    checkPublished: "the Google Sheet is published to the web,",
    checkUrl: "the CSV link is correct, and",
    checkHeaders: "the spreadsheet headers match the expected column names.",
    checkFeaturedColumn: 'the spreadsheet contains a "featured" column.',
    checkStockExists: "the stock number exists in the spreadsheet.",
    availableCount: count => `${count} vehicle(s) available`,
    featuredHeroTitle: "Quality Used Cars at Great Prices",
    featuredHeroSubtitle: "Browse our inventory. Estimates without any obligation, call us!!!",
    inventoryButton: "View Inventory",
    ctaTitle: "Have Questions? Call Us Today",
    mileageUnavailable: "Mileage unavailable",
    callForPrice: "Call for price",
    miles: "miles",
    stockNumber: "Stock #",
    price: "Price",
    mileage: "Mileage",
    vin: "VIN",
    exterior: "Exterior",
    interior: "Interior",
    transmission: "Transmission",
    drivetrain: "Drivetrain",
    fuel: "Fuel",
    vehicleDescription: "Vehicle Description",
    vehicleDetails: "Vehicle Details",
    features: "Features",
    contactTitle: "Contact Us",
    contactSubtitle: "We’re here to help you find the right vehicle",
    dealershipInformation: "Dealership Information",
    phone: "Phone",
    email: "Email",
    address: "Address",
    businessHours: "Business Hours",
    emailUs: "Email Us",
    sendUsMessage: "Send Us a Message",
    name: "Name",
    message: "Message",
    sendMessage: "Send Message",
    yourName: "Your name",
    yourEmail: "you@example.com",
    yourPhone: "(555) 555-5555",
    howCanWeHelp: "How can we help you?",
    formNote:
      "This simple form opens your email app to send the message. Later, you can replace it with a hosted contact form service if you want messages submitted directly from the website.",
    vehicleNotFound: stock => `Vehicle not found for stock #: ${stock}`,
    returnToInventory: "Please return to Inventory.",
    askAboutSubject: stock => `Question about stock #${stock}`,
    moreInfoVehicle: "Contact us for more information about this vehicle.",
    inventoryFooter: "© 2026 Border Used Auto Parts and Sales | McAllen, TX",
    languageLabel: "Español"
  },
  es: {
    navHome: "Inicio",
    navInventory: "Inventario",
    navContact: "Contacto",
    navTowing: "Grúa",
    towingTitle: "Servicio de Grúa",
    towingSubtitle: "Servicio rápido y confiable cuando lo necesite",
    callNow: "Llamar ahora",
    callDealer: "Llamar al concesionario",
    viewDetails: "Ver detalles",
    backToInventory: "Volver al inventario",
    emailAboutCar: "Correo sobre este auto",
    loadingInventory: "Cargando inventario...",
    loadingFeatured: "Cargando vehículos destacados...",
    loadingVehicle: "Cargando detalles del vehículo...",
    inventoryTitle: "Inventario actual",
    inventorySubtitle: "Explore nuestros vehículos disponibles",
    featuredTitle: "Vehículos destacados",
    noFeatured: "No hay vehículos marcados como destacados en la hoja de cálculo.",
    noAvailable: "No hay vehículos marcados como disponibles en la hoja de cálculo.",
    noFeaturedSelected: "No hay vehículos destacados seleccionados.",
    noAvailableFound: "No se encontraron vehículos disponibles.",
    vehicleNotSpecified: "No se especificó ningún vehículo.",
    vehicleOpenExample: "Abra esta página usando una URL como:",
    spreadsheetNotConfigured: "La URL de la hoja de cálculo aún no está configurada.",
    failedLoadFeatured: "No se pudieron cargar los vehículos destacados.",
    failedLoadInventory: "No se pudieron cargar los datos de la hoja de cálculo.",
    failedLoadVehicle: "No se pudieron cargar los detalles del vehículo.",
    checkThat: "Verifique que:",
    checkPublished: "la hoja de Google esté publicada en la web,",
    checkUrl: "el enlace CSV sea correcto, y",
    checkHeaders: "los encabezados coincidan con los nombres esperados.",
    checkFeaturedColumn: 'la hoja de cálculo contenga una columna "featured".',
    checkStockExists: "el número de inventario exista en la hoja de cálculo.",
    availableCount: count => `${count} vehículo(s) disponible(s)`,
    featuredHeroTitle: "Autos usados de calidad a excelentes precios",
    featuredHeroSubtitle: "Explore nuestro inventario. Presupuestos sin compromiso, Llamanos!!!",
    inventoryButton: "Ver inventario",
    ctaTitle: "¿Tiene preguntas? Llámenos hoy",
    mileageUnavailable: "Millaje no disponible",
    callForPrice: "Llame para precio",
    miles: "millas",
    stockNumber: "Inventario #",
    price: "Precio",
    mileage: "Millaje",
    vin: "VIN",
    exterior: "Exterior",
    interior: "Interior",
    transmission: "Transmisión",
    drivetrain: "Tracción",
    fuel: "Combustible",
    vehicleDescription: "Descripción del vehículo",
    vehicleDetails: "Detalles del vehículo",
    features: "Características",
    contactTitle: "Contáctenos",
    contactSubtitle: "Estamos aquí para ayudarle a encontrar el vehículo adecuado",
    dealershipInformation: "Información del concesionario",
    phone: "Teléfono",
    email: "Correo electrónico",
    address: "Dirección",
    businessHours: "Horario",
    emailUs: "Envíenos un correo",
    sendUsMessage: "Envíenos un mensaje",
    name: "Nombre",
    message: "Mensaje",
    sendMessage: "Enviar mensaje",
    yourName: "Su nombre",
    yourEmail: "usted@ejemplo.com",
    yourPhone: "(555) 555-5555",
    howCanWeHelp: "¿Cómo podemos ayudarle?",
    formNote:
      "Este formulario simple abre su aplicación de correo para enviar el mensaje. Más adelante, puede reemplazarlo con un servicio de formularios alojado si desea que los mensajes se envíen directamente desde el sitio web.",
    vehicleNotFound: stock => `No se encontró vehículo para inventario #: ${stock}`,
    returnToInventory: "Regrese al inventario.",
    askAboutSubject: stock => `Pregunta sobre inventario #${stock}`,
    moreInfoVehicle: "Contáctenos para más información sobre este vehículo.",
    inventoryFooter: "© 2026 Border Used Auto Parts and Sales | McAllen, TX",
    languageLabel: "English"
  }
};

function getLanguage() {
  return localStorage.getItem("siteLang") || "en";
}

function setLanguage(lang) {
  localStorage.setItem("siteLang", lang);
}

function t(key, ...args) {
  const lang = getLanguage();
  const value = SITE_TEXT[lang][key];
  return typeof value === "function" ? value(...args) : value || key;
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function parseCSVLine(line) {
  const result = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];

    if (char === '"' && inQuotes && nextChar === '"') {
      current += '"';
      i++;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }

  result.push(current);
  return result;
}

function csvToObjects(csvText) {
  const lines = csvText
    .trim()
    .split(/\r?\n/)
    .filter(line => line.trim() !== "");

  if (lines.length < 2) return [];

  const headers = parseCSVLine(lines[0]).map(h => h.trim());

  return lines.slice(1).map(line => {
    const values = parseCSVLine(line);
    const row = {};

    headers.forEach((header, index) => {
      row[header] = (values[index] || "").trim();
    });

    return row;
  });
}

async function fetchCars() {
  if (!SHEET_CSV_URL || SHEET_CSV_URL.includes("PASTE_YOUR_GOOGLE_SHEET_CSV_URL_HERE")) {
    throw new Error(t("spreadsheetNotConfigured"));
  }

  const response = await fetch(SHEET_CSV_URL, { cache: "no-store" });
  if (!response.ok) {
    throw new Error("HTTP " + response.status);
  }

  const csvText = await response.text();
  return csvToObjects(csvText);
}

function formatPrice(value) {
  const number = Number(String(value).replace(/[^0-9.-]/g, ""));
  if (Number.isNaN(number) || number <= 0) {
    return t("callForPrice");
  }
  return "$" + number.toLocaleString();
}

function formatMileage(value) {
  const number = Number(String(value).replace(/[^0-9.-]/g, ""));
  if (Number.isNaN(number)) return t("mileageUnavailable");
  return number.toLocaleString() + " " + t("miles");
}

function isAvailable(car) {
  return (car.status || "").trim().toLowerCase() === "available";
}

function isFeatured(car) {
  return (car.featured || "").trim().toLowerCase() === "yes";
}

function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function collectPhotos(car) {
  const fields = ["photo1","photo2","photo3","photo4","photo5","photo6","photo7","photo8","photo9","photo10"];
  return fields.map(f => car[f]).filter(v => v && v.trim() !== "");
}

function collectFeatures(car) {
  const featureFields = ["feature1","feature2","feature3","feature4","feature5","feature6","feature7","feature8","feature9","feature10"];
  const fieldFeatures = featureFields.map(f => car[f]).filter(v => v && v.trim() !== "");
  if (fieldFeatures.length) return fieldFeatures;

  if (car.features && car.features.trim() !== "") {
    return car.features.split("|").map(v => v.trim()).filter(Boolean);
  }
  return [];
}

function setupLanguageToggle() {
  const btn = document.getElementById("languageToggle");
  if (!btn) return;

  btn.textContent = SITE_TEXT[getLanguage()].languageLabel;

  btn.addEventListener("click", () => {
    const next = getLanguage() === "en" ? "es" : "en";
    setLanguage(next);
    location.reload();
  });
}

function applyCommonText() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  const footer = document.getElementById("siteFooterText");
  if (footer) footer.textContent = t("inventoryFooter");
}

function safeImage(url) {
  const fallback = "images/oopsIE.png";
  const baseImagePath = "https://images.borderusedautos.com/images/";

  if (!url || typeof url !== "string") {
    return fallback;
  }

  let cleanUrl = url.trim();

  if (!cleanUrl) {
    return fallback;
  }

  // Convert backslashes to forward slashes
  cleanUrl = cleanUrl.replace(/\\/g, "/");

  // If protocol-relative URL, force HTTPS
  if (cleanUrl.startsWith("//")) {
    cleanUrl = "https:" + cleanUrl;
  }

  // Force HTTP to HTTPS
  if (/^http:\/\//i.test(cleanUrl)) {
    cleanUrl = cleanUrl.replace(/^http:\/\//i, "https://");
  }

  // Local paths (keep as-is)
  //if (
  //  cleanUrl.startsWith("images/") ||
  //  cleanUrl.startsWith("./") ||
  //  cleanUrl.startsWith("../") ||
  //  cleanUrl.startsWith("/")
  //) {
  //  return cleanUrl;
 // }

  // Already HTTPS
  if (/^https:\/\//i.test(cleanUrl)) {
    return cleanUrl;
  }

  // treat anything else as filename or relative path
  return baseImagePath + cleanUrl.replace(/^\.?\/*/, "");
}

function handleImageError(img) {
  if (img.dataset.fallbackApplied) return;

  img.dataset.fallbackApplied = "true";
  img.src = "images/oopsIE.png";
}
