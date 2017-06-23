defmodule RsvpWeb.ChatController do
  use RsvpWeb.Web, :controller

  def index(conn, _) do
    render conn, "chat.html"
  end

  def new(conn, %{"message_form" => %{"text" => message}}) do
    RsvpWeb.ChatChannel.send_message(message)
    conn = put_layout conn, false
    render conn, "chat.html"
  end
end
