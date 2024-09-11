/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { ORDER_EMAIL_TEMPLATE } from "./email_templates/order_invoice";

export const blockInvalidChar = (e: React.KeyboardEvent<HTMLInputElement>) =>
	['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();



// currencySymbols.ts
const currencySymbols: { [key: string]: string } = {
	USD: "$",
	EUR: "€",
	GBP: "£",
	JPY: "¥",
	GHS: "₵", // Ghanaian Cedi
	// Add more currencies as needed
  };
  
  export function getCurrencySymbol(currencyCode: string): string | undefined {
	return currencySymbols[currencyCode.toUpperCase()];
  }

  export const parseToMoney = (value: number | undefined) => {
	if (!value) return 0;
	if (isNaN(value)) return null;
  
return Number(value).toLocaleString(undefined, {
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
});
  };

  export const MESSAGE_API_BASE = 'https://api.access89.com/messaging/v1';


  export async function getAuthToken() {

    try {
        const response = await axios.post(
            'https://api.access89.com/a89/v1/auth/authenticate',
            {
              username: 'maxwell@access89.com',
              password: 'Legacy_123'
            },
            {
              headers: {
                'x-app-env': 'prod'
              }
            }
          );
        return response.data.user.accessToken;
    } catch (error) {
        console.error('Error fetching auth token:', error);
        throw new Error('Failed to authenticate');
    }
}

interface messageType {
    email: string;
    type?: "email" | "sms";
    template: "order_confirmation" | "order_delivery";
    data?: any;
}


export const sendMessage = async ({email, type, template, data}: messageType, ) => {

  let emailTemplate = "";

  switch (template) {
    case "order_confirmation":
      emailTemplate = ORDER_EMAIL_TEMPLATE(data);
      break;
    
    case "order_delivery":
      emailTemplate = `Your order has been delivered. Thank you for shopping with us!`;
      break;
    default:
      emailTemplate = `Your order is successful and will be delivered to you soon. Thank you for shopping with us!`;
      break
  }


    const authToken = await getAuthToken(); 

    const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
          "x-app-env": "prod",
          "User-Agent": "axios/1.6.8",
          "Accept-Encoding": "gzip, compress, deflate, br",
        },
      };

      const customerPayload = {
        message: emailTemplate,
        recipients: [email, "gibson@access89.com"],
        subject: template.split("_").join(" ").toLowerCase(),
        display_name: "Foundry Hub",
        type: type || "email",
        company_name: "Shield Microfinance",
      };

      await axios.post(
        `${MESSAGE_API_BASE}/messaging/send`,
        customerPayload,
        config
      );


}


export const parsePaymentStatus = (status: string) => {
  switch (status) {
    case "awaiting":
      return "Not Paid"
    case "captured":
    default:
      return status;
  }
};


