const environment = import.meta.env;








export const variables = {
  "medusa-backend-url": environment.VITE_MEDUSA_BACKEND_URL,
  "control-tower": environment.VITE_CONTROL_TOWER,
  "medusa-api_key": environment.VITE_MEDUSA_API_KEY,
  "medusa-admin-email": environment.VITE_MEDUSA_ADMIN_EMAIL,
  "medusa-admin-password": environment.VITE_MEDUSA_ADMIN_PASSWORD,
  
};
