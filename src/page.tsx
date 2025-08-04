import { Plural, Trans, useLingui } from '@lingui/react/macro';

export default function Inbox() {
	const { i18n, t } = useLingui();
	const messages = [{}, {}];
	const messagesCount = messages.length;
	const lastLogin = new Date();
	const markAsRead = () => {
		alert(t`Marked as read.`);
	};

	return (
		<div>
			<h1>
				<Trans>Message Inbox</Trans>
			</h1>
			<Trans>
				This should be translated!
			</Trans>
			<p>
				<Trans>
					See all <a href="/unread">unread messages</a>
					{' or '}
					<a onClick={() => markAsRead()}>mark them</a> as read.
				</Trans>
			</p>

			<p>
				<Plural
					value={messagesCount}
					_0="There are no messages"
					one="There's # message in your inbox ${name}"
					other="There are # messages in your inbox"
				/>
			</p>

			<footer>
				<Trans>Last login on {i18n.date(lastLogin.toLocaleDateString())}.</Trans>
			</footer>
		</div>
	);
}
