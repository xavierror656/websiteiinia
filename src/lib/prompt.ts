type PromptMessage = {
  role: 'user' | 'assistant';
  content: string;
};

class Prompt {
  private playground: HTMLElement | null;
  private promptWindow: HTMLElement | null;
  private conversation: PromptMessage[] = [];
  private userPrompts: string[] = [];
  private chatModel: string = 'gpt 4o';
  private timeouts: number[] = [];

  constructor(selector: string) {
    this.playground = document.querySelector<HTMLElement>(selector);
    this.promptWindow = this.playground?.querySelector<HTMLElement>('.prompt-container') ?? null;
  }

  public get promptList() {
    return this.userPrompts;
  }

  public setAIModel(model: string) {
    this.chatModel = model.toLowerCase();
  }

  public addPrompt(message: string) {
    if (!this.promptWindow || !message.trim()) {
      return;
    }

    if (this.conversation.length === 0) {
      this.promptWindow.innerHTML = '';
    }

    const userMessage: PromptMessage = { role: 'user', content: message };
    this.userPrompts.push(message);
    this.conversation.push(userMessage);

    this.promptWindow.innerHTML += this.createMessageBubble(userMessage, [
      'tw-w-fit',
      'tw-ml-auto',
      'tw-p-2',
      'tw-rounded-xl',
      'tw-bg-gray-100',
      'dark:tw-bg-[#171717]'
    ]);

    this.queueTimeout(() => {
      if (this.promptWindow) {
        this.promptWindow.scrollTop = this.promptWindow.scrollHeight;
      }
    }, 150);

    this.queueTimeout(() => this.answer(), 100);
  }

  private answer() {
    if (!this.promptWindow) {
      return;
    }

    const replies: Record<string, string> = {
      'gpt 4o': 'Hello from Gpt 4o, add 3 prompts',
      gemini: 'Hello from Gemini, add 3 prompts',
      'llama 3': 'Hello from Meta Llama 3, add 3 prompts',
      claude: 'Hello from Claude, add 3 prompts'
    };

    const message: PromptMessage = {
      role: 'assistant',
      content: replies[this.chatModel] ?? 'Hello from Pixa Playground, add 3 prompts'
    };

    this.conversation.push(message);

    this.promptWindow.innerHTML += this.createMessageBubble(message, ['tw-w-fit', 'tw-mr-auto', 'tw-p-2']);
  }

  private createMessageBubble(message: PromptMessage, classNames: string[]) {
    const div = document.createElement('div');
    div.classList.add(...classNames);
    div.innerText = message.content;

    return `
      <div class="tw-w-full tw-flex tw-p-2">
        ${div.outerHTML.toString()}
      </div>
    `;
  }

  private queueTimeout(fn: () => void, delay: number) {
    const id = window.setTimeout(fn, delay);
    this.timeouts.push(id);
  }

  public destroy() {
    this.timeouts.forEach((id) => window.clearTimeout(id));
    this.timeouts = [];
    this.conversation = [];
    this.userPrompts = [];
    this.promptWindow = null;
    this.playground = null;
  }
}

export default Prompt;
