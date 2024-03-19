import { defineStore } from 'pinia';
import { getCards, createCard, updateCard } from '~/api/cards';

export const useCardsStore = defineStore({
  id: 'cards',

  state: () => ({
    columns: [],
    shuffleCard: null,
  }),

  actions: {
    distributeCardsToColumns(cards) {
      const data = [
        {
          row: '0',
          title: 'ON HOLD',
          cards: [],
        },
        {
          row: '1',
          title: 'IN PROGRESS',
          cards: [],
        },
        {
          row: '2',
          title: 'NEEDS REVIEW',
          cards: [],
        },
        {
          row: '3',
          title: 'APPROVED',
          cards: [],
        },
      ];

      cards.forEach((card) => {
        const { row } = card;
        const column = data.find((col) => col.row === row);

        if (column) {
          column.cards.push(card);
        }
      });

      this.$patch({ columns: data });
    },

    async loadCards() {
      const cards = await getCards();
      this.distributeCardsToColumns(cards);
    },

    async createCard(attributes) {
      const newCard = await createCard(attributes);
      const column = this.columns.find((col) => col.row === attributes.row);
      if (column) {
        column.cards.push(newCard);
      }
    },

    shuffleStart(card) {
      this.$patch({ shuffleCard: card });
    },

    shuffleRealtime(newRowNumber: string): void {
      if (this.shuffleCard) {
        const oldRow = this.columns.find((col) => col.row === this.shuffleCard.row);
        const newRow = this.columns.find((col) => col.row === newRowNumber);

        if (oldRow && newRow) {
          oldRow.cards = oldRow.cards.filter(card => card.id !== this.shuffleCard.id);
          newRow.cards.push(this.shuffleCard);
        }
      }
    },

    async shuffleEnd(newRow: string) {
      this.shuffleRealtime(newRow);

      await updateCard(this.shuffleCard.id, {
        seq_num: this.shuffleCard.seq_num,
        text: this.shuffleCard.text,
        row: newRow,
      });

      this.$patch({ shuffleCard: null });
    },
  },
});
