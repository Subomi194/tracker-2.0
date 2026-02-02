export default function formatDate(dateString: string) {
    const date = new Date(dateString);

    const formatter = new Intl.DateTimeFormat('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return formatter.format(date);
}