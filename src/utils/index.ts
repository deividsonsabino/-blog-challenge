interface Size {
    sm: string
    md: string
    lg: string
}

const size: Size = {
    sm: '375px', // for mobile screen
    md: '768px', // for tablets
    lg: '1920', // for laptops
}

export const device = {
    sm: `(min-width: ${size.sm})`,
    md: `(min-width: ${size.md})`,
    lg: `(min-width: ${size.lg})`,
}