export const strictEquals = (a, b) => {
    let x = Object.is(a, b);
    if (Object.is(a, NaN) || Object.is(b, NaN)) {
        x = false;
    } else if (Object.is(a, 0) && Object(b, -0)) {
        x = true;
    } else if (Object.is(b, 0) && Object(a, -0)) {
        x = true;
    }

    return x;
};
