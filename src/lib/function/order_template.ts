const phoneNumber = '6285142528672';

type MessageCategory = 'order' | 'consultation' | 'askAdmin';

function getGreeting(): string {
	const hour = new Date().getHours();
	if (hour >= 4 && hour < 11) return 'pagi';
	if (hour >= 11 && hour < 15) return 'siang';
	if (hour >= 15 && hour < 18) return 'sore';
	return 'malam';
}

const greeting = getGreeting();

// Message templates
const messageTemplates: Record<MessageCategory, (itemData?: any) => string> = {
	order: () =>
		`Halo Admin 👋🏻, selamat ${greeting}!\n` +
		`Saya tertarik untuk memesan produk Murni Putra Lang, apakah boleh minta persyaratannya terlebih dahulu? 😊`,

	consultation: () =>
		`Halo Admin 👋🏻, selamat ${greeting}!\n` +
		`Saya ingin konsultasi tentang produk Murni Putra Lang. Bisa dibantu?`,

	askAdmin: () =>
		`Halo Admin 👋🏻, selamat ${greeting}!\n` +
		`Saya ingin menanyakan beberapa hal terkait Murni Putra Lang.`
};

// Main WhatsApp function
export function openWhatsApp(category: MessageCategory = 'order', itemData?: any) {
	const template = messageTemplates[category];
	const message = template ? template(itemData) : '';
	const encodedMessage = encodeURIComponent(message);

	// Use the stable API format instead of wa.me
	const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
	window.open(url, '_blank');
}
