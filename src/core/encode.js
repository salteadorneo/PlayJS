export function encodeCode (code) {
  return bytesToBase64(new TextEncoder().encode(code))
}

export function decodeCode (code) {
  return new TextDecoder().decode(base64ToBytes(code))
}

export function getCodeFromURL () {
  try {
    const { pathname } = window.location
    if (pathname.length <= 1) return false
    const hashCode = pathname.slice(1)
    return hashCode ? decodeCode(hashCode) : false
  } catch {
    return false
  }
}

function base64ToBytes (base64) {
  const binString = atob(base64)
  return Uint8Array.from(binString, (m) => m.codePointAt(0))
}

function bytesToBase64 (bytes) {
  const binString = Array.from(bytes, (x) => String.fromCodePoint(x)).join('')
  return btoa(binString)
}
