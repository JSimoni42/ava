module.exports = async ({negotiateProtocol}) => {
	const protocol = negotiateProtocol(['experimental']);
	protocol.ready();

	crash(protocol.subscribe());
};

async function crash(messages) {
	for await (const message of messages) {
		throw new Error(message.data);
	}
}
