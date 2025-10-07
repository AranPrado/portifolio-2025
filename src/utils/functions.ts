import Curriculo from "../assets/CurriculoAran.pdf";

export const handleOpenLink = (link: string) => {
  window.open(link, "_blank");
};

export const clearPhoneCaracter = (phone: string) => {
  return phone.replace(/\D/g, "");
};

export const downloadResume = () => {
  const link = document.createElement("a");
  link.href = Curriculo;
  link.download = "Curriculo_Aran_2025.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
