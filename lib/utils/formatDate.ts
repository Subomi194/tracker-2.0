export function shortFormatDate(dateString: string) {
    const date = new Date(dateString);

    const formatter = new Intl.DateTimeFormat('en-GB', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
    });

    return formatter.format(date);
}

export function longFormatDate(dateString: string) {
    const date = new Date(dateString);

    const formatter = new Intl.DateTimeFormat('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return formatter.format(date);
}



export function formatMonthYear(dateString: string) {
    const date = new Date(dateString);

    const formatter = new Intl.DateTimeFormat('en-GB', {
        month: 'long',
        year: 'numeric'
    });

    return formatter.format(date);
}