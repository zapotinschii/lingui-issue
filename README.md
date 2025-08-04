1. run `npm ci`   
2. run `npx lingui extract`   
3. run `npx lingui compile --typescript`   
   
Messages from src/page.tsx are not translated, unless they writen in a single line.   
Don't work:   
```tsx
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
```
Work:   
```tsx
<Trans>This should be translated!</Trans>
<p>
  <Trans>See all <a href="/unread">unread messages</a>{' or '}<a onClick={() => markAsRead()}>mark them</a> as read.</Trans>
</p>
```