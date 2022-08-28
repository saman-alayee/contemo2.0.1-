export function hasSlot(context, slotName) {
	return Boolean(context.$slots[slotName] && context.$slots[slotName].length);
}
