import { ySyncPluginKey } from '@dalperin/y-prosemirror'
import { Transaction } from 'prosemirror-state'

export function isChangeOrigin(transaction: Transaction): boolean {
  return !!transaction.getMeta(ySyncPluginKey)
}
