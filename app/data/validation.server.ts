import { ExpenseData } from "~/utils/types.server";

function isValidTitle(value: string): string | boolean {
    return value && value.trim().length > 0 && value.trim().length <= 30;
}
  
  function isValidAmount(value: string): boolean | undefined {
    const amount = parseFloat(value);
    return !isNaN(amount) && amount > 0;
  }
  
  function isValidDate(value: string): string | boolean {
    return value && new Date(value).getTime() < new Date().getTime();
  }
  
  export function validateExpenseInput(input: ExpenseData) {
    let validationErrors: {
        title?: string;
        amount?: string;
        date?: string;
      } = {};
  
    if (!isValidTitle(input.title)) {
      validationErrors.title = 'Invalid expense title. Must be at most 30 characters long.'
    }
  
    if (!isValidAmount(input.amount)) {
      validationErrors.amount = 'Invalid amount. Must be a number greater than zero.'
    }
  
    if (!isValidDate(input.date)) {
      validationErrors.date = 'Invalid date. Must be a date before today.'
    }
  
    if (Object.keys(validationErrors).length > 0) {
      throw validationErrors;
    }
  }