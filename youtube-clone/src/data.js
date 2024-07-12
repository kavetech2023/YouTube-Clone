export const API_KEY = "AIzaSyDceF1o_TZuUQJKF2_nldzGt9EClXqBUpM"

export const value_converter = (value) => {
    if (value>=1000)
    {
        return Math.floor(value/1000000) + "M";
    }
    else if (value>=1000)
    {
        return Math.floor(value/1000) + "K";
    }
    else{
        return value;
    }
}    