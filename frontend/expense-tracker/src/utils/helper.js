export const validateEmail = (email) => {
    console.log("Validating email:", email); // Debugging line
    
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};