const COMMENT_TOKEN_KEY_NAME = 'comment-token';

export type Token = string;

export const getCommentToken = (): Token => {
  const token = localStorage.getItem(COMMENT_TOKEN_KEY_NAME);
  return token ?? '';
};

export const saveCommentToken = (token: Token): void => {
  localStorage.setItem(COMMENT_TOKEN_KEY_NAME, token);
};
