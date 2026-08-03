'use client'

import { useEffect, useRef, useState } from 'react'

export const BIRTHDAY_CONFIG = {
  day: 3,
  month: 7, // JavaScript months are zero-indexed: August
  name: 'Anh Ben',
  dateLabel: '03 • 08',
  message:
    'Chúc Anh Ben một sinh nhật thật nhiều niềm vui, thành công và những khoảnh khắc tuyệt vời.',
} as const

const STORAGE_PREFIX = 'anhben-birthday-modal-dismissed'
const FORCE_MODAL =
  process.env.NODE_ENV === 'development' &&
  process.env.NEXT_PUBLIC_FORCE_BIRTHDAY_MODAL === 'true'

const confetti = [
  ['left-[7%]', 'top-[16%]', 'bg-[#f8d46b]', 'birthday-confetti-one'],
  ['left-[17%]', 'top-[6%]', 'bg-[#ef7c8e]', 'birthday-confetti-two'],
  ['left-[28%]', 'top-[18%]', 'bg-[#87d2d8]', 'birthday-confetti-three'],
  ['right-[26%]', 'top-[7%]', 'bg-[#f8d46b]', 'birthday-confetti-three'],
  ['right-[12%]', 'top-[19%]', 'bg-[#c6a0e9]', 'birthday-confetti-one'],
  ['right-[6%]', 'top-[42%]', 'bg-[#ef7c8e]', 'birthday-confetti-two'],
  ['left-[5%]', 'top-[52%]', 'bg-[#87d2d8]', 'birthday-confetti-three'],
] as const

function getStorageKey(date: Date) {
  return `${STORAGE_PREFIX}-${date.getFullYear()}-${BIRTHDAY_CONFIG.month + 1}-${BIRTHDAY_CONFIG.day}`
}

function CakeIllustration() {
  return (
    <div className="relative mx-auto h-40 w-48 sm:h-48 sm:w-56" aria-hidden="true">
      <div className="absolute left-1/2 top-1 h-7 w-3 -translate-x-1/2 rounded-full bg-[#ffd95d] shadow-[0_0_18px_5px_rgba(255,210,85,0.5)]" />
      <div className="absolute left-1/2 top-6 h-10 w-2 -translate-x-1/2 rounded-t-full bg-gradient-to-r from-[#e4a72b] via-[#fff0a6] to-[#d68e19]" />
      <div className="absolute left-1/2 top-15 h-1.5 w-4 -translate-x-1/2 rounded-full bg-[#fff5b8]" />
      <div className="absolute bottom-4 left-1/2 h-16 w-40 -translate-x-1/2 rounded-b-[1.6rem] rounded-t-xl border border-[#ffe28c]/60 bg-[repeating-linear-gradient(135deg,#d99b2d_0_10px,#f5ca5c_10px_20px)] shadow-[0_18px_28px_rgba(0,0,0,0.28)]" />
      <div className="absolute bottom-[4.55rem] left-1/2 h-8 w-40 -translate-x-1/2 rounded-full bg-[#fff1b2] shadow-[inset_0_-8px_12px_rgba(207,142,37,0.35)]" />
      <div className="absolute bottom-3 left-1/2 h-4 w-44 -translate-x-1/2 rounded-[50%] bg-[#8b4b17]/80 blur-[1px]" />
      <div className="absolute bottom-0 left-1/2 h-2.5 w-48 -translate-x-1/2 rounded-full bg-[#e5b343] shadow-[0_0_24px_rgba(244,191,77,0.55)]" />
    </div>
  )
}

function Balloon({ className, color }: { className: string; color: string }) {
  return (
    <div className={`absolute ${className}`} aria-hidden="true">
      <div className={`h-12 w-9 rounded-[50%_50%_48%_48%] ${color} shadow-[inset_-6px_-7px_11px_rgba(0,0,0,0.15),inset_4px_4px_7px_rgba(255,255,255,0.5)]`} />
      <div className={`mx-auto -mt-0.5 h-2 w-2 rotate-45 ${color}`} />
      <div className="mx-auto h-12 w-px bg-white/35" />
    </div>
  )
}

function Gift() {
  return (
    <div className="absolute bottom-6 right-5 h-16 w-16 rotate-[-8deg] rounded-md bg-[#d89227] shadow-[0_10px_24px_rgba(0,0,0,0.28)] sm:bottom-8 sm:right-10" aria-hidden="true">
      <div className="absolute inset-y-0 left-1/2 w-3 -translate-x-1/2 bg-[#fff0aa]" />
      <div className="absolute -top-2 left-1/2 h-3 w-[4.6rem] -translate-x-1/2 rounded-sm bg-[#efbd46]" />
      <div className="absolute -top-6 left-1/2 h-7 w-8 -translate-x-1/2 rounded-[100%_0_100%_0] border-4 border-[#fff0aa]" />
    </div>
  )
}

export function BirthdayModal() {
  const [isOpen, setIsOpen] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const lastActiveElementRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const today = new Date()
    const isBirthday = today.getDate() === BIRTHDAY_CONFIG.day && today.getMonth() === BIRTHDAY_CONFIG.month
    const wasDismissed = window.localStorage.getItem(getStorageKey(today)) === 'true'

    if ((isBirthday || FORCE_MODAL) && !wasDismissed) {
      const openTimer = window.setTimeout(() => {
        lastActiveElementRef.current = document.activeElement as HTMLElement | null
        setIsOpen(true)
      }, 0)
      return () => window.clearTimeout(openTimer)
    }
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    const previousPaddingRight = document.body.style.paddingRight
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`
    closeButtonRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      document.body.style.paddingRight = previousPaddingRight
    }
  }, [isOpen])

  function closeModal() {
    window.localStorage.setItem(getStorageKey(new Date()), 'true')
    setIsOpen(false)
    window.setTimeout(() => lastActiveElementRef.current?.focus(), 0)
  }

  if (!isOpen) return null

  return (
    <div
      className="birthday-backdrop fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-slate-950/75 p-4 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeModal()
      }}
    >
      <section
        aria-label="Lời chúc mừng sinh nhật Anh Ben"
        aria-modal="true"
        role="dialog"
        className="birthday-modal relative w-full max-w-[38rem] overflow-hidden rounded-[2rem] border border-[#f8d46b]/35 bg-[#071a33] text-center text-white shadow-[0_28px_110px_rgba(0,0,0,0.65),0_0_70px_rgba(245,190,60,0.16)]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(246,198,76,0.24),transparent_25%),radial-gradient(circle_at_8%_74%,rgba(32,117,160,0.28),transparent_32%),linear-gradient(145deg,rgba(255,255,255,0.06),transparent_42%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:28px_28px]" />
        {confetti.map(([horizontal, vertical, color, animation], index) => (
          <span key={index} className={`birthday-confetti absolute h-2 w-1.5 rotate-12 rounded-sm ${horizontal} ${vertical} ${color} ${animation}`} />
        ))}
        <Balloon className="left-4 top-20 birthday-float-slow sm:left-10" color="bg-[#ef7c8e]" />
        <Balloon className="right-6 top-24 birthday-float sm:right-12" color="bg-[#e7b940]" />
        <Gift />

        <button
          ref={closeButtonRef}
          type="button"
          onClick={closeModal}
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10 text-xl text-white transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffe28c]"
          aria-label="Đóng lời chúc mừng sinh nhật"
        >
          <span aria-hidden="true">×</span>
        </button>

        <div className="relative px-6 pb-8 pt-12 sm:px-12 sm:pb-10 sm:pt-14">
          <p className="text-xs font-bold tracking-[0.36em] text-[#f9d977] sm:text-sm">HAPPY BIRTHDAY!</p>
          <div className="mx-auto mt-3 h-px w-24 bg-gradient-to-r from-transparent via-[#f8d46b] to-transparent" />
          <p className="mt-4 font-serif text-3xl tracking-[0.24em] text-[#ffe9a4] sm:text-4xl">{BIRTHDAY_CONFIG.dateLabel}</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#fff0b5] sm:text-5xl">{BIRTHDAY_CONFIG.name}</h2>
          <CakeIllustration />
          <p className="mx-auto max-w-md text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">“{BIRTHDAY_CONFIG.message}”</p>
          <button
            type="button"
            onClick={closeModal}
            className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full border border-[#ffe28c]/60 bg-gradient-to-b from-[#f5ce62] to-[#c8871e] px-6 text-sm font-bold text-[#10213a] shadow-[0_8px_24px_rgba(238,181,52,0.28)] transition hover:scale-[1.02] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#ffe28c]"
          >
            Chúc mừng sinh nhật Anh Ben
          </button>
        </div>
      </section>
    </div>
  )
}
