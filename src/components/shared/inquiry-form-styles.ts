// Shared presentation only; form controllers and validation stay in their pages.
export const inquiryInputClasses = {
  label: 'text-sm text-gray-700 dark:text-gray-200 font-medium',
  inputWrapper: 'bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-xl shadow-none min-h-12 data-[hover=true]:border-blue-400 group-data-[focus=true]:border-blue-600',
  input: 'text-base text-gray-900 dark:text-white placeholder:text-gray-400 bg-transparent',
};

export const inquirySelectClasses = {
  label: inquiryInputClasses.label,
  trigger: 'bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-xl shadow-none min-h-12 data-[hover=true]:border-blue-400',
  value: 'text-base text-gray-900 dark:text-white',
};

export const inquirySubmitClass = 'w-full h-12 bg-blue-700 text-white rounded-xl px-6 font-semibold text-base hover:bg-blue-800 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500';
