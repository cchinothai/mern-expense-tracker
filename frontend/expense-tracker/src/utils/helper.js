export const validateEmail = (email) => {
    console.log("Validating email:", email); // Debugging line
    
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const getInitials = (name) => {
    if (!name) return "";

    const words = name.split("  ");
    let initials = "";

    for (let i = 0 ; i < Math.min(words.length, 2) ; i++){
        initials += words[i][0]; 
    }

    return initials.toUpperCase();
}; 

export const addThousandsSeparator = (num) => {
    const [integerPart, fractionalPart] = num.toString().split(".");
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ","); 

    return fractionalPart 
        ? `${formattedInteger}.${fractionalPart}`
        : formattedInteger;
};


export const prepareExpenseBarChartData = (data = []) => {
    const chartData = data.map( (item) => ({
        category: item?.category,
        amount: item?.amount,
    }) )

    return chartData;
};