"use client";
import {
	Toast,
	ToastClose,
	ToastDescription,
	ToastTitle,
	ToastViewport,
} from '../ui/toast';
import { useToast } from '../../hooks/use-toast';
import React from 'react';

export function Toaster() {
	const { toasts } = useToast();

	return (
		<>
			{toasts.map(({ id, title, description, action, ...props }) => (
				<Toast key={id} {...props}>
					<div className="grid gap-1">
						{title && <ToastTitle>{title}</ToastTitle>}
						{description && <ToastDescription>{description}</ToastDescription>}
					</div>
					{action}
					<ToastClose />
				</Toast>
			))}
			<ToastViewport />
		</>
	);
}
