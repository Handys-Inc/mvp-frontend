// images
import getting from "../assets/images/getting.png";
import trouble from "../assets/images/trouble.png";
import legal from "../assets/images/legal.png";
import payment from "../assets/images/payment.png";
import tips from "../assets/images/tips.png";

// import icons
import { FaRoute } from "react-icons/fa";
import {
  AiOutlineExclamationCircle,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { BsCreditCard } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";

export const topics = [
  {
    id: 1,
    image: getting,
    icon: <FaRoute />,
    area: "getting started",
    slug: "getting-started",
    title: "Getting Started",
  },
  {
    id: 2,
    image: trouble,
    icon: <AiOutlineExclamationCircle />,
    area: "troubleshooting",
    slug: "troubleshooting",
    title: "Troubleshooting",
  },
  {
    id: 3,
    image: payment,
    icon: <BsCreditCard />,
    area: "payments and billing",
    slug: "payments-and-billing",
    title: "Payment and Billing",
  },
  {
    id: 4,
    image: tips,
    icon: <AiOutlineInfoCircle />,
    area: "tips and tricks",
    slug: "tips-and-tricks",
    title: "Tips and Tricks",
  },
  {
    id: 5,
    image: legal,
    icon: <HiOutlineDocumentText />,
    area: "legal and policies",
    slug: "legal-and-policies",
    title: "Legal and Policies",
  },
];
