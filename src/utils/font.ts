import { Inter, NTR, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });
const ntr = NTR({ subsets: ["latin"], weight: ["400"] });

export const font = {
  inter,
  ntr,
  roboto,
};
