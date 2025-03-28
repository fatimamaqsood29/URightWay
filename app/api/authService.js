export const authService = {
    parentSignup: async (formData) => {
      const response = await fetch("https://urightway.com/api/v1/parent/signup", {
        method: "POST",
        body: formData,
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Signup failed");
      }
      
      return response.json();
    }
  };